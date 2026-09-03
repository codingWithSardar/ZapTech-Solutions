import Project from "../models/projectSchema.js";
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

export const addProject = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      technologies,
      features,
      year,
      type,
      liveDemo,
    } = req.body;


    if (!title || !category || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const existingProject = await Project.findOne({ title });

    if (existingProject) {
      return res.status(400).json({
        success: false,
        message: "Project with this title already exists",
      });
    }

    let image = {}

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        image = {
          public_id: result.public_id,
          url: result.secure_url
        }


      } finally {
        if (fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path)
        }
      }

    }

    const project = await Project.create({
      title,
      category,
      description,
      technologies : JSON.parse(technologies),
      features  : JSON.parse(features),
      year,
      type,
      liveDemo,
      image
    });

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    console.error("Add Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);
    
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Get Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      category,
      description,
      year,
      type,
      liveDemo,
    } = req.body;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // =========================
    // PARSE TECHNOLOGIES
    // =========================

    let technologies = req.body.technologies;

    if (typeof technologies === "string") {
      try {
        technologies = JSON.parse(technologies);
      } catch {
        technologies = technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    }

    // =========================
    // PARSE FEATURES
    // =========================

    let features = req.body.features;

    if (typeof features === "string") {
      try {
        features = JSON.parse(features);
      } catch {
        features = features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    }

    // =========================
    // UPDATE TEXT FIELDS
    // =========================

    if (title !== undefined) {
      project.title = title;
    }

    if (category !== undefined) {
      project.category = category;
    }

    if (description !== undefined) {
      project.description = description;
    }

    if (technologies !== undefined) {
      project.technologies = technologies;
    }

    if (features !== undefined) {
      project.features = features;
    }

    if (year !== undefined) {
      project.year = year;
    }

    if (type !== undefined) {
      project.type = type;
    }

    if (liveDemo !== undefined) {
      project.liveDemo = liveDemo;
    }

    // =========================
    // UPDATE IMAGE
    // =========================

    if (req.file) {
      try {
        // Delete old image from Cloudinary
        if (project.image?.public_id) {
          await cloudinary.uploader.destroy(
            project.image.public_id
          );
        }

        // Upload new image
        const result = await cloudinary.uploader.upload(
          req.file.path
        );

        project.image = {
          public_id: result.public_id,
          url: result.secure_url,
        };
      } finally {
        // Delete temporary local file
        if (fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
      }
    }

    // =========================
    // SAVE PROJECT
    // =========================

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    console.error("Update Project Error:", error);

    // Remove uploaded temporary file if an error occurs
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

       if (project.image?.public_id) {
      await cloudinary.uploader.destroy(project.image.public_id);
    }

    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
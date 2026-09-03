import { Technology } from "../models/technologySchema.js";


export const addTechnology = async (req, res) => {
  try {
    const { name, category, icon, gradient } = req.body;

    if (!name || !category || !icon || !gradient) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingTechnology = await Technology.findOne({
      name: name.trim(),
    });

    if (existingTechnology) {
      return res.status(400).json({
        success: false,
        message: "Technology already exists",
      });
    }

    const technology = await Technology.create({
      name: name.trim(),
      category: category.trim(),
      icon: icon.trim(),
      gradient: gradient.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Technology added successfully",
      technology,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTechnologies = async (req, res) => {
  try {
    const technologies = await Technology.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      technologies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTechnology = async (req, res) => {
  try {
    const { id } = req.params;

    const technology = await Technology.findById(id);

    if (!technology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    return res.status(200).json({
      success: true,
      technology,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTechnology = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, icon, gradient } = req.body;

    const technology = await Technology.findById(id);

    if (!technology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    if (name) {
      const existingTechnology = await Technology.findOne({
        name: name.trim(),
        _id: { $ne: id },
      });

      if (existingTechnology) {
        return res.status(400).json({
          success: false,
          message: "Technology already exists",
        });
      }

      technology.name = name.trim();
    }

    if (category) {
      technology.category = category.trim();
    }

    if (icon) {
      technology.icon = icon.trim();
    }

    if (gradient) {
      technology.gradient = gradient.trim();
    }

    await technology.save();

    return res.status(200).json({
      success: true,
      message: "Technology updated successfully",
      technology,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTechnology = async (req, res) => {
  try {
    const { id } = req.params;

    const technology = await Technology.findById(id);

    if (!technology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    await Technology.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Technology deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
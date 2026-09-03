import ClientRequirement from "../models/ClientRequirement.js";


export const createClientRequirement = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message,
      contactPermission,
    } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    if (contactPermission !== true && contactPermission !== "true") {
      return res.status(400).json({
        success: false,
        message: "Contact permission is required",
      });
    }

    const clientRequirement = await ClientRequirement.create({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message,
      contactPermission: true,
    });

    res.status(201).json({
      success: true,
      message: "Project inquiry submitted successfully",
      data: clientRequirement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClientRequirements = async (req, res) => {
  try {
    const requirements = await ClientRequirement.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: requirements,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClientRequirement = async (req, res) => {
  try {
    const requirement = await ClientRequirement.findById(req.params.id);

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Client requirement not found",
      });
    }

    res.status(200).json({
      success: true,
      data: requirement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClientRequirement = async (req, res) => {
  try {
    const requirement = await ClientRequirement.findByIdAndDelete(
      req.params.id
    );

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Client requirement not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Client requirement deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
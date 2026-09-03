import mongoose from "mongoose";

const clientRequirementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: String,
      trim: true,
      default: "",
    },

    timeline: {
      type: String,
      trim: true,
      default: "",
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    contactPermission: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClientRequirement = mongoose.model(
  "ClientRequirement",
  clientRequirementSchema
);

export default ClientRequirement;
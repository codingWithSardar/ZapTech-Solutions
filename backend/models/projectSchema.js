import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Project category is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },

    technologies: {
      type: [String],
      required: [true, "Technologies are required"],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    image: {
     public_id : {
      type : String 
     } ,
     url : {
      type : String
     }
    },

    year: {
      type: String,
      default: new Date().getFullYear().toString(),
    },

    type: {
      type: String,
      trim: true,
    },

    liveDemo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
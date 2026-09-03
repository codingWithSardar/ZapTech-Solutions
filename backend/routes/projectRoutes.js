import express from "express";
import {
  addProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";
import { upload } from "../middlewares/multer.js";
import { adminAuth } from "../middlewares/adminAuth.js";

export const projectRouter = express.Router();

projectRouter.get("/", getProjects);
projectRouter.get("/:id", getProjectById);

projectRouter.post("/",  adminAuth , upload.single("image"), addProject);
projectRouter.put("/:id",  adminAuth , upload.single("image") ,updateProject);
projectRouter.delete("/:id", adminAuth , deleteProject);
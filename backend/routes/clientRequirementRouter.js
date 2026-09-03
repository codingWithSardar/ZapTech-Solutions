import express from "express";
import { createClientRequirement, deleteClientRequirement, getClientRequirement, getClientRequirements } from "../controllers/clientRequirementController.js";
import { adminAuth } from "../middlewares/adminAuth.js";



export const clientRequirementRouter = express.Router();

clientRequirementRouter.post("/", createClientRequirement);

clientRequirementRouter.get("/", adminAuth, getClientRequirements);

clientRequirementRouter.get("/:id", adminAuth, getClientRequirement);

clientRequirementRouter.delete("/:id", adminAuth, deleteClientRequirement);


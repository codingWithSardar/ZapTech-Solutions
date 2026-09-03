import express from "express";
import { addTechnology, deleteTechnology, getTechnologies, getTechnology, updateTechnology } from "../controllers/technologyController.js";
import { adminAuth } from "../middlewares/adminAuth.js";


export const technologyRouter = express.Router();

technologyRouter.post("/", adminAuth , addTechnology);

technologyRouter.get("/", getTechnologies);

technologyRouter.get("/:id", getTechnology);

technologyRouter.put("/:id", adminAuth  , updateTechnology);

technologyRouter.delete("/:id", adminAuth  , deleteTechnology);

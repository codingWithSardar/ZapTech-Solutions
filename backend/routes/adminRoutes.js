import express from "express";

import {
  adminLogin,
  getCurrentAdmin,
  adminLogout,
} from "../controllers/adminController.js";

import { adminAuth } from "../middlewares/adminAuth.js";

export const adminRouter = express.Router();


// Login
adminRouter.post("/login", adminLogin);


// Current admin
adminRouter.get("/me", adminAuth, getCurrentAdmin);


// Logout
adminRouter.get("/logout", adminAuth, adminLogout);
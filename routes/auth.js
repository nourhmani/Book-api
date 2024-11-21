import express from "express";
import { validateSignup } from "../middlewares/validateSignup.js";
import { login, signup } from "../controllers/auth.js";
const router = express.Router();
//routes
router.post("/login", login);
router.post("/signup", validateSignup, signup);

export default router;

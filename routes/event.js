import express from "express";
import { createEvent, fetchEvents , getEventById} from "../controllers/event.js";
import { validateEvent } from "../middlewares/validateEvent.js";

const router = express.Router();

router.get("/", fetchEvents);
router.post("/", validateEvent, createEvent);
router.get("/:id", getEventById);

export default router;

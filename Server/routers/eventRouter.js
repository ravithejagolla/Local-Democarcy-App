import {Router} from "express";
import { verifyAuth,verifyRole } from "../middlewares/authmiddleware.js";
import { getAllEvents,createEvent } from "../controllers/eventController.js";

const eventrouter = Router();

eventrouter.get("/get-event", verifyAuth, getAllEvents);

eventrouter.post("/create-event", verifyAuth, verifyRole(["admin"]), createEvent);

export default eventrouter;

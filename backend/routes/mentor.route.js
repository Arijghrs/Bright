import { addMentor,  getMentors } from "../controllers/mentor.controller.js";
import express from 'express';


const router = express.Router();

router.get("/mentors", getMentors);
router.post("/addMentor",addMentor);

export default router;
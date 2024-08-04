import express from 'express';
import { addCourse, getCourses } from '../controllers/course.controller.js';



const router = express.Router();


router.post("/addcourse", addCourse);
router.get("/getcourses", getCourses);



export default router;
import express from 'express';
import { addCourse } from '../controllers/course.controller.js';



const router = express.Router();


router.post("/addcourse", addCourse);



export default router;
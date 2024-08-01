import Course from "../models/Course.model.js";



export const addCourse = async (req, res, next) => {
    try {
      const courseData = req.body;
      const course = new Course({ ...courseData });
  
      await course.save();
  
      return res.status(201).json(course);
    } catch (error) {
      next(error);
    }
  };
  
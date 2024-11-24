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

  
  export const getCourses = async (req, res, next) => {
    try {
      const { search } = req.query; 
      let query = {};
  
      if (search) {
        
        query = {
          $or: [
            { title: { $regex: search, $options: 'i' } }, 
            { Mentor: { $regex: search, $options: 'i' } } 
          ]
        };
      }
  
      const courses = await Course.find(query); 
      res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  };
  
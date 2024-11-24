import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';


export const getMentors = async (req, res, next) => {
  try {
    const { search } = req.query;

    let query = { role: 'mentor' };

    if (search) {
      const searchRegex = new RegExp(`^${search}`, 'i');
      query = {
        ...query,
        $or: [
          { name: { $regex: searchRegex } },
          { email: { $regex: searchRegex } },
          { phone: { $regex: searchRegex } }
        ]
      };
    }

    const mentors = await User.find(query);
    res.status(200).json(mentors);
  } catch (error) {
    next(error);
  }
};







  /*export const createMentor = async () => {
    try {
      const hashedPassword = bcryptjs.hashSync('mentor', 10); 
  
      const mentorExists = await User.findOne({ email: 'mentor1@gmail.com' });
      if (!mentorExists) {
        const mentor = new User({
          username: 'mentor1',
          email: 'mentor1@gmail.com',
          phone:'+556484516161',
          password: hashedPassword,
          role: 'mentor',
        });
        await mentor.save();
        console.log('mentor created!');
      } else {
        console.log('mentor already exists.');
  
      }
    } catch (error) {
      console.error('Error creating mentor:', error);
    }
  };*/

  export const addMentor = async (req, res, next) => {
    try {
      const mentorData = req.body;
      
      mentorData.role = 'mentor';
  
      const mentor = new User({ ...mentorData });
  
      await mentor.save();
  
      return res.status(201).json(mentor);
    } catch (error) {
      next(error);
    }
  };
import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';


export const getMentors = async (req, res, next) => {
    try {
      const mentors = await User.find({ role: 'mentor' }); 
      res.status(200).json(mentors);
    } catch (error) {
      next(error);
    }
  };


  export const createMentor = async () => {
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
  };
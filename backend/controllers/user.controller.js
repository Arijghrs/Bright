import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const getUsers = async (req, res, next) => {
  try {
      const { search } = req.query;

      let query = {};

      if (search) {
          // Regular expression to match the start of the string
          const searchRegex = new RegExp(`^${search}`, 'i');

          query = {
              $or: [
                  { name: { $regex: searchRegex } },          // Search by first letter in the name
                  { email: { $regex: searchRegex } },         // Search by first letter in the email
                  { phoneNumber: { $regex: searchRegex } }    // Search by first digit in phone number
              ]
          };
      }

      const users = await User.find(query);
      res.status(200).json(users);
  } catch (error) {
      next(error);
  }
};






export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
      return next(errorHandler(401, 'You can only update your own account!'));
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
  
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';



export const addManager = async (req, res, next) => {
  try {
    const manager = new User({ ...req.body, role: 'manager' });
    await manager.save();

    return res.status(201).json(manager);
  } catch (error) {
    next(error);
  }
};

export const addAssistance = async (req, res, next) => {
  try {
    const assistance = await User.create(req.body);
    return res.status(201).json(assistance);

  } catch (error) {
    next(error);
  }
};

export const addProfessor = async (req, res, next) => {
  try {
    const professor = await User.create(req.body);
    return res.status(201).json(professor);

  } catch (error) {
    next(error);
  }
};


export const createOwner = async () => {
  try {
    const hashedPassword = bcryptjs.hashSync('yourOwnerPassword', 10); // Hash the owner's password

    const ownerExists = await User.findOne({ email: 'owner1@gmail.com' });
    if (!ownerExists) {
      const owner = new User({
        username: 'owner',
        email: 'owner1@gmail.com',
        password: hashedPassword,
        role: 'owner',
      });
      await owner.save();
      console.log('Owner created!');
    } else {
      console.log('Owner already exists.');

    }
  } catch (error) {
    console.error('Error creating owner:', error);
  }
};


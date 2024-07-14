import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";



export const addManager = async (req, res, next) => {
  try {
    const manager = await User.create(req.body);
    return res.status(201).json(manager);

  } catch (error) {
    next(error);
  }
};
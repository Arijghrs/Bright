import mongoose from "mongoose";
const Schema = mongoose.Schema;

const managerSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Manager = mongoose.model('Manager', managerSchema);

export default Manager;
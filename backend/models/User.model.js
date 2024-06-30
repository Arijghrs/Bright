import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'manager', 'assistant', 'owner'],
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

export default User;
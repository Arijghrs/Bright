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
  phone: {
    type: String,
    required: true
  },
  avatar:{
    type: String,
    default: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"

  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'manager', 'assistant', 'owner'],
    default: 'user'
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
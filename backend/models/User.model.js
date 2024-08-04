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
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'manager', 'assistant', 'owner'],
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

export default User;
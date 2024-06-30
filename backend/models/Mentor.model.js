import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mentorSchema = new mongoose.Schema({
 
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

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;
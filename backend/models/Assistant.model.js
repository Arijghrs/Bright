import mongoose from "mongoose";
const Schema = mongoose.Schema;

const assistantSchema = new mongoose.Schema({
 
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

const Assistant = mongoose.model('Assistant', assistantSchema);

export default Assistant;
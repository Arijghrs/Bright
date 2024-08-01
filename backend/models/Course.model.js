import mongoose from "mongoose";
const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  Category: {
    type: String,
   
  },
  Mentor: {
    type: String,
    
  },
  Experience: {
    type: String,
    
  },
  Description: {
    type: String,
  },
  price: {
    type: String,
  },
  skills: {
    type: String,
  },
},
{ timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
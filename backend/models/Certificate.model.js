import mongoose from "mongoose";
const Schema = mongoose.Schema;

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  Category: {
    type: String,
   
  },
  Mentor: {
    type: String,
    
  }
},
{ timestamps: true });

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
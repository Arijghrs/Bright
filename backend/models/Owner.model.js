
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ownerSchema = new mongoose.Schema({

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

const Owner = mongoose.model('Owner', ownerSchema);

export default Owner;
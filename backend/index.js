import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRouter from './routes/auth.route.js';
import ownerRouter from './routes/owner.route.js';
import mentorRouter from './routes/mentor.route.js';
import userRouter from './routes/user.route.js';
import courseRouter from './routes/course.route.js';
import certificateRouter from './routes/certificate.route.js'


import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { createOwner } from './controllers/owner.controller.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());



const connect = async () => {
    try {
     await mongoose.connect(process.env.MONGO);
     console.log("connected to mongo")
    } catch (error) {
     throw error;
    }
    }
    mongoose.connection.on("disconnected", ()=>{
     console.log("mongoDB disconnected")
    })
    mongoose.connection.on("connected", ()=>{
     console.log("mongoDB connected")
    })


app.use('/api/owner', ownerRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/mentor', mentorRouter);
app.use('/api/course', courseRouter);
app.use('/api/certificate', certificateRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(3000, () =>{
  connect();
  console.log('server is running ');
  createOwner();
  
});
import express from 'express';
import {connect} from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routers/issueRouter.js';
import eventrouter from './routers/eventRouter.js';
import authRouter from './routers/authRouter.js';
import lagislationRouter from './routers/lagislationRouter.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); 

// Routes
app.use('/api/issues', router);
app.use('/event',eventrouter)
app.use('/auth',authRouter)
app.use('/api/legislation', lagislationRouter);



const PORT = process.env.PORT
const mongoconnection=process.env.mongourl
app.listen(PORT,async()=>{
  try{
    await connect(mongoconnection)
    console.log('Connected to MongoDB')
    console.log(`Server is running on port ${PORT}`);
  }catch(e){
    console.log('Error connecting to MongoDB:', e.message);
  }
})

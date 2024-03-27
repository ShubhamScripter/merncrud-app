import express from 'express';
const app=express();
const port=3000;
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
import User from './models/usermodel.js'
import authRoutes from './routes/authRoutes.js'

mongoose.connect(process.env.mongourl).then(()=>{console.log("database is connected")}).catch((err)=>{console.log(err)});
 app.use(express.json());
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>
{
    console.log("yes");
    const statusCode=err.statusCode||500;
    const message=err.message||"internal server error";
   return res.json(
        {
            success:false,
            message,
            statusCode
        }
    )

})


app.listen(port,(err)=>{

    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(`server is listening at port :${port}`);
    }

})
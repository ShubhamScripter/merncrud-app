import express from 'express';
const app=express();
const port=3000;
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();


console.log(process.env.mongourl);
mongoose.connect(process.env.mongourl).then(()=>{console.log("database is connected")}).catch((err)=>{console.log(err)});

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
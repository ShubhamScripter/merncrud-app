import User from '../models/usermodel.js'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utills/error.js';

export const signup=async(req,res,next)=>{
    try{

    
    const {username,email,password}=req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newuser=new User({username,email,password:hashPassword});
    await newuser.save();
    res.status(201).send({message:"user created succesfully"});
    }
    catch(err)
    {
       next(errorHandler(501,"some mistake happened"));
    }
    
}
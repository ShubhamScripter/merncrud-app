import User from '../models/usermodel.js'
import bcrypt from 'bcrypt'

export const signup=async(req,res)=>{
    try{

    
    const {username,email,password}=req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newuser=new User({username,email,password:hashPassword});
    await newuser.save();
    res.status(201).send({message:"user created succesfully"});
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
    
}
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";



export const signup=async(req,res,next)=>{
    // console.log(req.body)

    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
////bcryptjs is used for not revealing the password to anyone else
    const newUser=new User({username,email,password:hashedPassword});

    try{
    await newUser.save()
    res.status(201).json("user created successfully")
    }
    catch(error){
        // res.status(500).json(error.message)
        next(error)
        // next(errorHandler(550,'error from the function'));
    }
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const validUser=await User.findOne({email});
            if(!validUser) return next(errorHandler(404,'Wrong credentials!'));
            const validPassword=bcryptjs.compareSync(password,validUser.password);
            if(!validPassword) return next(errorHandler(401,'Wrong credentials!'))
            const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:pass,...rest}=validUser._doc;   //this is used that if we get passowrd in hashed also that is also disabled
            res
            .cookie('access_token',token,{httpOnly:true})    ///saving token as a cookie and httponly is used for making cookie safer
            .status(200)
            // .json(validUser);   
            .json(rest)

    }
    catch(error){
        next(error);
    }

}
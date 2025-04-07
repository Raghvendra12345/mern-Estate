    import express from 'express'
    // "test": "echo \"Error: no test specified\" && exit 1"    
    import mongoose from 'mongoose';
    import dotenv from "dotenv";
    import userRouter from './routes/user.routes.js';
   import authRouter from './routes/auth.route.js';
//    import connectDB from './db/connect.js'
    dotenv.config();

    // console.log("MongoDB URI:", process.env.MONGO);
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected mongodb");
    })
    .catch((err)=>{
    console.log("not connected",err)
    })
    const app=express();

    app.use(express.json())



    app.get("/test",(req,res)=>{
        //   res.send("Hello World")
        res.json({
            message:"Hello World!",
        })
    })
    app.use("/api/user",userRouter)
    app.use("/api/auth",authRouter)
    app.listen(3000,()=>{
        console.log("server is running fine !**")
    })


    //creating middleware
    app.use((err,req,res,next)=>{
        const statusCode=err.statusCode || 500;
        const message=err.message || 'Internal Server Error';
        return res.status(statusCode).json({
            success:false,
            statusCode,
            message,
        })

    })
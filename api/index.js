    import express from 'express'
    // "test": "echo \"Error: no test specified\" && exit 1"    
    import mongoose from 'mongoose'
    import dotenv from "dotenv"

    dotenv.config();
    mongoose.connect("mongodb+srv://Raghav123:Raghav@cluster0.ynvkd.mongodb.net/").then(()=>{
        console.log("connected mongodb")
    })
    .catch((err)=>{
    console.log("not connected",err)
    })
    const app=express();
    app.listen(3000,()=>{
        console.log("server is running fine !**")
    })
import{Worker} from "bullmq"
import "dotenv/config"

import Analytics from "../schema/analytics.schema.js"
import mongoose from "mongoose";


await mongoose.connect(process.env.MONGO_URI!);

console.log("MongoDB connected for analytics event worker");

const AnalyticalWorker=new Worker("Ananlytical-Queue",async(job)=>{
   
        console.log("Processing job",job.id)
        const{userId,shortCode,userAgent,referrer}=job.data
        await Analytics.create({
            userId,
            shortCode,userAgent,referrer
        })
        console.log("Analytics event saved")
    
},{connection:{host:"redis-container",port:6379}})

AnalyticalWorker.on("completed",(job)=>{
    console.log(`Analytics event job ${job.id} completed`)
})

AnalyticalWorker.on("failed",(job,err)=>{
    console.log(`Analytical event jpb ${job?.id} failed:`,err.message)
})
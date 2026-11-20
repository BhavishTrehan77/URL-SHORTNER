import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
const app=express()



app.use(express.json())

async function connection(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connection success")
}
connection()

app.get("/health",async(req,resp)=>{
 resp.json({
    status: "ok"
  });
})



app.listen(3000)





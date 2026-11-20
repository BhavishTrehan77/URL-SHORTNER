import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './routes/url.routes.js'
import UserRouter from "./routes/user.routes.js"
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


app.use("/api/v1",router)
app.use("/api/v1",UserRouter)
app.listen(3000)





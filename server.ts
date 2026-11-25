import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './routes/url.routes.js'
import UserRouter from "./routes/user.routes.js"
import { ErrorHandeling } from './middleware/errorHandelingMidd.js'
const app=express()



app.use(express.json())

const PORT=Number(process.env.PORT)||3000

async function connection(){
    await mongoose.connect(process.env.MONGO_URI!)
    console.log("connection success")
}
connection()

app.get("/health",async(req,resp)=>{
 resp.json({
    status: "ok",
    instance:process.env.PORT||3000
  });
})

//my name is bhavish
app.use("/api/v1",router)
app.use("/api/v1",UserRouter)

app.use(ErrorHandeling)
app.listen(PORT,()=>{
  console.log(`Server running on Port ${PORT}`)
})





import User from "../schema/user.schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const Signup=async(name:string,email:string,password:string,role:string)=>{
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await User.create({name,email,password:hashedPassword,role})
    return user
}

export const Login=async(email:string,password:string)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error("user not found")
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("passwords didnt match")
    }

    const token=jwt.sign({id:user._id,role:user.role},process.env.AccSecKey!)
    return{message:"user logged insuccess",user,token}


}
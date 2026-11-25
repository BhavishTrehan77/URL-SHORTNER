import type{Request,Response,NextFunction} from 'express'

import jwt from 'jsonwebtoken'
export async function Auth(req:Request,res:Response,next:NextFunction){
    try{
    const AuthHeader=req.headers.authorization
    if(!AuthHeader||!AuthHeader.startsWith('Bearer ')){
        return res.json({
            message:"no auth header found"
        })
    }
    const token=AuthHeader.split(" ")[1]!
    const decode=jwt.verify(token,process.env.AccSecKey!)
    req.user=decode
    return next()
    }catch(err){
        return res.json({
             message: "Invalid or expired token"
        })
    }
}
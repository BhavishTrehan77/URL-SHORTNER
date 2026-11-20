import type{Request,Response} from 'express'

import { Login, Signup } from '../services/user.service.js'

export const signup=async(req:Request,res:Response)=>{
    const ans=await Signup(req.body.name,req.body.email,req.body.password,req.body.role)
    return res.json({
        ans
    })
}

export const login=async(req:Request,res:Response)=>{
    const ans=await Login(req.body.email,req.body.password)
    res.json({
        ans
    })
}

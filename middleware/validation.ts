import{body, validationResult} from "express-validator"
import type{Request,Response,NextFunction} from 'express'



export const validation=[
body("originalUrl").isURL().withMessage("Please provide a valid URL"),
body("expiresAt").optional().isISO8601().toDate().withMessage("Please provide a valid date"),
body("customAlias").optional().isAlphanumeric().withMessage("Custom alias should be alphanumeric")
]


export const validate=(req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            success:false,
            message:"validation failed",
            errors:errors.array()
        })
    }
    next()
}
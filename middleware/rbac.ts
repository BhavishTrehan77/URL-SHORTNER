import type{Request,Response,NextFunction} from "express"
export async function Rbac(...roles:string[]){
    return(req:Request,res:Response,next:NextFunction)=>{
        if(!roles.includes(req.user.role)){
            return res.json({
                message:"user with this perticular role not defined"
            })
        }
        return next()
    }
}
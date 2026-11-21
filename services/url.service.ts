import { Url } from "../schema/url.schema.js";
import { generateShortCode } from "../utils/shortCode.js"




export const createShortUrl=async(originalUrl:string,userId:string,expiresAt?:Date,customAlias?:string)=>{
    try{
        new URL(originalUrl)
    }catch(err){
        throw new Error("InvalidUrl")
    }
    
    // let shortCode=generateShortCode();
    let shortCode: string;
    if(customAlias){
        const existingAlias=await Url.exists({shortCode:customAlias})
         if(existingAlias){
            throw new Error("Custom alias already exists")
         }
         shortCode=customAlias
    }else{
        shortCode=generateShortCode()
        while(await Url.exists({shortCode})){
            shortCode=generateShortCode()
        }
    }
    const url=await Url.create({
        userId,
        originalUrl,
        shortCode,
        expiresAt
    })
   return url

}
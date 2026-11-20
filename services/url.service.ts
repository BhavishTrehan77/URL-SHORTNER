import { Url } from "../schema/url.schema.js";
import { generateShortCode } from "../utils/shortCode.js"




export const createShortUrl=async(originalUrl:string,expiresAt?:Date)=>{
    try{
        new URL(originalUrl)
    }catch(err){
        throw new Error("InvalidUrl")
    }
    let shortCode=generateShortCode();

    while(await Url.exists({shortCode})){
        shortCode=generateShortCode();
    }
    const url=await Url.create({
        originalUrl,
        shortCode,
        expiresAt
    })
    return url
}
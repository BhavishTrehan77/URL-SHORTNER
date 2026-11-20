import { redisClient } from "../config/redis.js"

export const GetCache=async(cacheKey:string)=>{
    const ans=await redisClient.get(cacheKey)
    return ans
}


export const SetCache=async(cacheKey:string,data:string,ttl:number)=>{
    const ans=await redisClient.set(cacheKey,data,{EX:ttl})
    return ans
}

export const updateCache=async(cacheKey:string,data:string,ttl=60)=>{
    const ans=await redisClient.set(cacheKey,data,{EX:ttl})
    return ans
}


export const DelCache=async(cacheKey:string)=>{
    const ans=await redisClient.del(cacheKey)
    return ans
}
import type{ Request, Response } from "express";
import { createShortUrl } from "../services/url.service.js";
import { Url } from "../schema/url.schema.js";
import { GetCache, SetCache } from "../routes/redis.helper.js";
import { analyticQueue } from "../queue/Analytics.queue.js";
import AnalyticalQueue from "../queue/Anlytical.queue.js";

export const shortURL = async (
  req: Request,
  res: Response
) => {
  const { originalUrl, expiresAt,customAlias } = req.body;

  const ans = await createShortUrl(
    originalUrl,
    req.user.id,
    expiresAt ? new Date(expiresAt) : undefined,
    customAlias
  );

  return res.status(201).json({
    message: "Short URL created successfully",
    data: ans
  });
};

export const redirectUrl=async(req:Request,res:Response)=>{
    try{
        const{shortCode}=req.params
        const cacheKey=`url:${shortCode}`;
        const cachedUrl=await GetCache(cacheKey)
        if(cachedUrl){
            console.log("cache hit")
            const cached=JSON.parse(cachedUrl)
             await analyticQueue.add("record-click",{shortCode},{attempts:3,backoff:{type:"exponential",delay:1000},removeOnComplete:100,removeOnFail:500})
             await AnalyticalQueue.add("record-analytics",{userId:cached.userId,shortCode,userAgent:req.headers["user-agent"],referrer:req.headers.referer})

            return res.redirect(cached.originalUrl);
        } 
        console.log("cache miss")

        const url=await Url.findOne({shortCode})
        if(!url){
             return res.status(404).json({
        message: "Short URL not found"
      });
        }
         if (url.expiresAt && url.expiresAt < new Date()) {
      return res.status(410).json({
        message: "Short URL has expired"
      });
      
    }
    let ttl=3600
    if (url.expiresAt) {
    const remainingSeconds = Math.floor(
        (url.expiresAt.getTime() - Date.now()) / 1000
    );

    if (remainingSeconds <= 0) {
        return res.status(410).json({
            message: "Short URL has expired"
        });
    }

    ttl = Math.min(3600, remainingSeconds);
}
  
  await SetCache(cacheKey,JSON.stringify({originalUrl:url.originalUrl,userId:url.userId.toString()}),ttl)
  await analyticQueue.add("record-click",{shortCode},{attempts:3,backoff:{type:"exponential",delay:1000},removeOnComplete:100,removeOnFail:500})
  await AnalyticalQueue.add("record-analytics",{userId:url.userId.toString(),shortCode,userAgent:req.headers["user-agent"],referrer:req.headers.referer})
  
    return res.redirect(url.originalUrl)
    }catch (err) {
    console.log("REDIRECT ERROR:", err);

    return res.status(500).json({
      message: err instanceof Error
        ? err.message
        : "Something went wrong"
    });
  }
}
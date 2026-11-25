import { redisClient } from "../config/redis.js";
export async function RateLimiting(req, res, next) {
    const ip = req.ip;
    const cacheKey = `rate-limit${ip}`;
    const request = await redisClient.incr(cacheKey);
    if (request == 1) {
        await redisClient.expire(cacheKey, 60);
    }
    const limit = 5;
    if (request > limit) {
        return res.json({
            message: "you have reached you maximum attempts try after somtime now"
        });
    }
    return next();
}
//# sourceMappingURL=ratelimitng.js.map
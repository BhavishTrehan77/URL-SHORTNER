import { redisClient } from "../config/redis.js";
export const GetCache = async (cacheKey) => {
    const ans = await redisClient.get(cacheKey);
    return ans;
};
export const SetCache = async (cacheKey, data, ttl) => {
    const ans = await redisClient.set(cacheKey, data, { EX: ttl });
    return ans;
};
export const updateCache = async (cacheKey, data, ttl = 60) => {
    const ans = await redisClient.set(cacheKey, data, { EX: ttl });
    return ans;
};
export const DelCache = async (cacheKey) => {
    const ans = await redisClient.del(cacheKey);
    return ans;
};
//# sourceMappingURL=redis.helper.js.map
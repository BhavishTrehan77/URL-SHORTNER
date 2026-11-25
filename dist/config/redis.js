import { createClient } from "redis";
export const redisClient = createClient({
    url: process.env.REDIS_URL
});
redisClient.on("connect", async function () {
    console.log("Redis is connected successfully");
});
redisClient.on("error", (err) => {
    console.log(err.message);
});
async function connectRedis() {
    await redisClient.connect();
}
connectRedis();
//# sourceMappingURL=redis.js.map
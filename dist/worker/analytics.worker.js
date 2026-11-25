import mongoose from "mongoose";
import "dotenv/config";
import { Worker } from "bullmq";
import { Url } from "../schema/url.schema.js";
console.log("Analytics worker started...");
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected for analytics worker");
export const AnalyticWorker = new Worker("analytics-job", async (job) => {
    console.log("Processing Analytics", job.name);
    const { shortCode } = job.data;
    await Url.updateOne({ shortCode }, { $inc: { clickCount: 1 } });
    console.log("Click count upgraded");
}, {
    connection: {
        host: "localhost",
        port: 6379
    }
});
AnalyticWorker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
});
AnalyticWorker.on("failed", (job, err) => {
    console.log(`Job ${job?.id} failed:`, err.message);
});
//# sourceMappingURL=analytics.worker.js.map
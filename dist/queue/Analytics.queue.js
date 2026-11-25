import { Queue } from "bullmq";
export const analyticQueue = new Queue("analytics-job", {
    connection: {
        host: "localhost",
        port: 6379
    }
});
//# sourceMappingURL=Analytics.queue.js.map
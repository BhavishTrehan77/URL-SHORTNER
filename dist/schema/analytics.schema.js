import mongoose, { Document, Schema } from "mongoose";
const AnalyticsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    shortCode: {
        type: String,
        required: true,
        index: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        index: true
    },
    userAgent: {
        type: String
    },
    referrer: {
        type: String
    }
}, { timestamps: true });
const Analytics = mongoose.model("Analytics", AnalyticsSchema);
export default Analytics;
//# sourceMappingURL=analytics.schema.js.map
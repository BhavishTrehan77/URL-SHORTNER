import mongoose, { Document, Schema } from "mongoose";
const urlSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    originalUrl: {
        type: String,
        required: true,
        trim: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    clickCount: {
        type: Number,
        default: 0
    },
    expiresAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
export const Url = mongoose.model("Url", urlSchema);
//# sourceMappingURL=url.schema.js.map
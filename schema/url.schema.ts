import mongoose, { Document, Schema } from "mongoose";

export interface IUrl {
    userId:mongoose.Types.ObjectId,
    originalUrl: string;
    shortCode: string;
    clickCount: number;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

const urlSchema = new Schema<IUrl>(

    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
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
    },
    {
        timestamps: true
    }
);

export const Url = mongoose.model<IUrl>("Url", urlSchema);
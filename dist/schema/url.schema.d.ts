import mongoose, { Document } from "mongoose";
export interface IUrl {
    userId: mongoose.Types.ObjectId;
    originalUrl: string;
    shortCode: string;
    clickCount: number;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Url: mongoose.Model<IUrl, {}, {}, {}, Document<unknown, {}, IUrl, {}, mongoose.DefaultSchemaOptions> & IUrl & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUrl & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=url.schema.d.ts.map
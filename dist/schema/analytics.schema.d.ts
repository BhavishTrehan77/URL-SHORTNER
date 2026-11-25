import mongoose, { Document } from "mongoose";
export interface IAnalytics extends Document {
    userId: mongoose.Types.ObjectId;
    shortCode: string;
    timestamp: Date;
    userAgent?: string;
    referrer?: string;
}
declare const Analytics: mongoose.Model<IAnalytics, {}, {}, {}, Document<unknown, {}, IAnalytics, {}, mongoose.DefaultSchemaOptions> & IAnalytics & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IAnalytics & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
export default Analytics;
//# sourceMappingURL=analytics.schema.d.ts.map
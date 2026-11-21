import mongoose,{Document,Schema} from "mongoose";


export interface IAnalytics extends Document{
    userId:mongoose.Types.ObjectId
    shortCode:string,
    timestamp:Date,
    userAgent?:string,
    referrer?:string
}

const AnalyticsSchema=new Schema<IAnalytics>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },
    shortCode:{
        type:String,
        required:true,
        index:true
    },
    timestamp:{
        type:Date,
        default:Date.now,
        index:true
    },
    userAgent:{
        type:String
    },
    referrer:{
        type:String
    }
},{timestamps:true})
 
const Analytics=mongoose.model<IAnalytics>("Analytics",AnalyticsSchema)

export default Analytics
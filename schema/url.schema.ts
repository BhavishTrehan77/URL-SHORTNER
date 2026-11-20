import mongoose,{Document,Schema} from 'mongoose'

export interface IUrl extends Document{
    originalUrl:string,
    shortCode:string,
    clickCount:number
    expiresAt:Date,
    updatedAt:Date
}

const urlSchema=new Schema<IUrl>({
    originalUrl:{
        type:String,
        required:true,
        trim:true
    },
    shortCode:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    clickCount:{
        type:String,
        default:0
    },
    expiredAt:{
        type:Date,
        default:null
    },
   

})

export const Url=mongoose.model<IUrl>("Url",urlSchema)


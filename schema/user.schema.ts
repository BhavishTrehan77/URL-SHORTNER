import mongoose,{Document,Schema} from 'mongoose'

interface User extends Document{
    name:string,
    email:string,
    password:string,
    role:string
}

const UserSchema=new Schema<User>({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})


const User=mongoose.model<User>('User',UserSchema)


export default User
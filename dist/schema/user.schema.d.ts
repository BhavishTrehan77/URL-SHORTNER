import mongoose, { Document } from 'mongoose';
interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}
declare const User: mongoose.Model<User, {}, {}, {}, Document<unknown, {}, User, {}, mongoose.DefaultSchemaOptions> & User & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, User & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=user.schema.d.ts.map
import mongoose, { Document, Schema } from 'mongoose';
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});
const User = mongoose.model('User', UserSchema);
export default User;
//# sourceMappingURL=user.schema.js.map
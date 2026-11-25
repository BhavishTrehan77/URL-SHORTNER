import User from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Signup = async (name, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    return user;
};
export const Login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("user not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("passwords didnt match");
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.AccSecKey);
    return { message: "user logged insuccess", user, token };
};
//# sourceMappingURL=user.service.js.map
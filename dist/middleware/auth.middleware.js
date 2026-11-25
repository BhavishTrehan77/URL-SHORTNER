import jwt from 'jsonwebtoken';
export async function Auth(req, res, next) {
    try {
        const AuthHeader = req.headers.authorization;
        if (!AuthHeader || !AuthHeader.startsWith('Bearer ')) {
            return res.json({
                message: "no auth header found"
            });
        }
        const token = AuthHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.AccSecKey);
        req.user = decode;
        return next();
    }
    catch (err) {
        return res.json({
            message: "Invalid or expired token"
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map
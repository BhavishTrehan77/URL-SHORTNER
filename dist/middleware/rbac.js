export async function Rbac(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.json({
                message: "user with this perticular role not defined"
            });
        }
        return next();
    };
}
//# sourceMappingURL=rbac.js.map
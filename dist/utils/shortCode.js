import crypto from "crypto";
export const generateShortCode = () => {
    return crypto.randomBytes(32).toString("base64url").slice(0.8);
};
//# sourceMappingURL=shortCode.js.map
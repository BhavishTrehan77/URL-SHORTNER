import crypto from "crypto"
export const generateShortCode=():string=>{
    return crypto.randomBytes(32).toString("base64url").slice(0.8)
}
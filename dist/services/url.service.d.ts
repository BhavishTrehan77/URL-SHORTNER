export declare const createShortUrl: (originalUrl: string, userId: string, expiresAt?: Date, customAlias?: string) => Promise<import("mongoose").Document<unknown, {}, import("../schema/url.schema.js").IUrl, {}, import("mongoose").DefaultSchemaOptions> & import("../schema/url.schema.js").IUrl & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=url.service.d.ts.map
export declare const GetCache: (cacheKey: string) => Promise<string | null>;
export declare const SetCache: (cacheKey: string, data: string, ttl: number) => Promise<string | null>;
export declare const updateCache: (cacheKey: string, data: string, ttl?: number) => Promise<string | null>;
export declare const DelCache: (cacheKey: string) => Promise<number>;
//# sourceMappingURL=redis.helper.d.ts.map
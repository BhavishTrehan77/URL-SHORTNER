import type { Request, Response, NextFunction } from "express";
export declare const shortURL: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const redirectUrl: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=url.controllers.d.ts.map
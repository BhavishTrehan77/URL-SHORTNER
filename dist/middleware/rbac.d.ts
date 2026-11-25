import type { Request, Response, NextFunction } from "express";
export declare function Rbac(...roles: string[]): Promise<(req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>>;
//# sourceMappingURL=rbac.d.ts.map
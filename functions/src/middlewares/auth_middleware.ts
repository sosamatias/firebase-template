import {Request, Response, NextFunction} from "express";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
  // TODO: Implement middleware
  if (req.headers.token !== "123") {
    res.send("not authorized").status(403);
    return;
  }
  next();
}

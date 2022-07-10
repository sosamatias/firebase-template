import {Request, Response} from "express";

export async function ping(req: Request, res: Response) {
  res.send("ok");
}

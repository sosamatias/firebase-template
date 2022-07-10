import * as MessagesService from "../../../services/messages_service";
import {Request, Response} from "express";
import {validate} from "../../../utils/json_schema";
import {Message, MessageSchema} from "../../../models/message_model";

export async function addMessage(req: Request, res: Response) {
  const errors = validate(req.body, MessageSchema);
  if (errors) {
    res.status(400).json(errors);
    return;
  }

  const newId = await MessagesService.addMessage(req.body as Message);
  res.json({newId});
}

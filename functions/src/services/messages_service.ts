import * as functions from "firebase-functions";
import * as MessagesRepository from "../repositories/messages_repository";
import {Message} from "../models/message_model";

export async function addMessage(p: Message): Promise<string> {
  const result = await MessagesRepository.addMessage(p.text);
  functions.logger.log("call addMessage", {text: p.text, newId: result.id});
  return result.id;
}

export async function makeUppercase(documentId: string, original: string) {
  const uppercase = original.toUpperCase();
  await MessagesRepository.updateMessage(documentId, uppercase);
  functions.logger.log("call makeUppercase", {documentId, original, uppercase});
}

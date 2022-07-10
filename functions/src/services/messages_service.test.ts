import {addMessage, makeUppercase} from "./messages_service";

import * as repo from "../repositories/messages_repository";
import * as functions from "firebase-functions";

jest.mock("../repositories/messages_repository");
jest.mock("firebase-functions");

const mockId = "Ge95QLvnW3hzf1nNnP5d";
const text = "hello";

test("makeUppercase", async () => {
  const mockUpdateMessage = jest.fn();
  (repo.updateMessage as jest.Mock).mockImplementation(mockUpdateMessage);

  const mockLog = jest.fn();
  (functions.logger.log as jest.Mock).mockImplementation(mockLog);

  await makeUppercase(mockId, text);
  const uppercase = text.toUpperCase();

  expect(mockUpdateMessage)
      .toHaveBeenCalledWith(mockId, uppercase);

  expect(mockLog)
      .toHaveBeenCalledWith(
          "call makeUppercase", {documentId: mockId, original: text, uppercase}
      );
});

test("addMessage", async () => {
  (repo.addMessage as jest.Mock).mockResolvedValue({id: mockId});
  const result = await addMessage({text});
  expect(result).toBe(mockId);
});

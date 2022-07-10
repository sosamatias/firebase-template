import * as express from "express";
import {authMiddleware} from "../middlewares/auth_middleware";
import {addMessage} from "../controllers/https/messages/messages_controller";

export const messagesRouter = express.Router();

// messagesRouter.use(authMiddleware);
// messagesRouter.post("/addMessage", addMessage);
messagesRouter.post("/addMessage", authMiddleware, addMessage);

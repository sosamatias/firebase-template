import * as express from "express";
import * as cors from "cors";
import {messagesRouter} from "./routers/messages_router";

export const app = express();
app.use(cors({origin: true}));

// app.use(authMiddleware);
app.use("/messages", messagesRouter);

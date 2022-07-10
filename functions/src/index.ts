import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {app} from "./app_express";
import {ping} from "./controllers/https/ping/ping_controller";
import {makeUppercase} from "./controllers/firestore/messages_controller";

admin.initializeApp();

// listens: for new messages added to /messages/:documentId/original
// creates: uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore.document("/messages/{documentId}")
    .onCreate(makeUppercase);

// {URL}/ping
exports.ping = functions.https.onRequest(ping);

// {URL}/functions/ (express app)
exports.functions = functions.https.onRequest(app);

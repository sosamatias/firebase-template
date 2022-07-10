import * as functions from "firebase-functions";
import * as MessagesService from "../../services/messages_service";

export async function makeUppercase(
    snap: functions.firestore.QueryDocumentSnapshot,
    context: functions.EventContext,
) {
  const original = snap.data().original;
  const documentId = context.params.documentId;
  await MessagesService.makeUppercase(documentId, original);
}

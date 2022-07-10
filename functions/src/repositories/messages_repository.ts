import * as admin from "firebase-admin";

export const collection = "messages";

export async function addMessage(text: string) {
  // path /messages/:documentId/original
  const writeResult = await admin.firestore()
      .collection(collection)
      .add({original: text});
  return writeResult;
}

export async function updateMessage(documentId: string, text: string) {
  // path /messages/:documentId/uppercase
  const writeResult = await admin.firestore()
      .collection(collection)
      .doc(documentId)
      .set({uppercase: text}, {merge: true});
  return writeResult;
}

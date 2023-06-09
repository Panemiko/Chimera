import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();
const db = admin.firestore();

// Create the user doc when the account is registered
export const authOnCreate = functions.auth.user().onCreate((user) => {
  db.collection("users").doc(user.uid);
});

// And on delete
export const authOnDelete = functions.auth.user().onDelete((user) => {
  db.collection("users").doc(user.uid).delete();
});

import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

export function createFirebase(config: firebase.FirebaseOptions) {
  if (firebase.getApps().length != 0)
    throw new Error("Firebase instance already exists");

  // Internal usage only
  const app = firebase.initializeApp(config);
  const firestore = getFirestore();

  return {};
}

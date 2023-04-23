import { createFirebase } from "@chimera/firebase";
import firebaseConfig from "firebase-config.js";

if (!firebaseConfig) throw new Error("Firebase settings undefined");

export const firebase = createFirebase(firebaseConfig);

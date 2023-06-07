import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "./firebase";

export async function signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  return await signInWithPopup(auth, googleProvider).catch(console.error);
}

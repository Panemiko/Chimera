import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export async function signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
}

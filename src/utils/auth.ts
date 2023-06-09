import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";

import { auth } from "./firebase";

export async function signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  return await signInWithPopup(auth, googleProvider).catch(console.error);
}

export function awaitForUserLoad() {
  return new Promise<User | null>((resolve, reject) => {
    if (auth.currentUser?.uid) return resolve(auth.currentUser);

    auth.onAuthStateChanged((user) => {
      if (user?.uid) resolve(user);
    }, reject);
  });
}

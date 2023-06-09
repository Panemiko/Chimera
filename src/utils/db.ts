import {
  CollectionReference,
  Query,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { Character } from "@/types/Character";
import { User } from "@/types/User";

import { awaitForUserLoad } from "./auth";
import { db } from "./firebase";

// Whole abstraction just to work with Typescript
function createRef<T>(name: string) {
  return collection(db, name) as CollectionReference<T>;
}

export const charactersRef = createRef<Character>("characters");
export const usersRef = createRef<User>("users");

export async function getDocsSanitized<T>(query: Query<T>) {
  const snapshot = await getDocs(query);

  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  }) as T[];
}

export async function getPlayerCharcters() {
  const user = await awaitForUserLoad();

  const docsQuery = query(charactersRef, where("userId", "==", user?.uid));
  return await getDocsSanitized(docsQuery);
}

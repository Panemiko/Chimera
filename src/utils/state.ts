import { hookstate } from "@hookstate/core";
import { auth } from "./firebase";

export const authState = hookstate(auth.currentUser);

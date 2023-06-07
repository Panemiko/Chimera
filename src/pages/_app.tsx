import { useHookstate } from "@hookstate/core";
import { onAuthStateChanged } from "firebase/auth";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import "@/styles/globals.css";
import { auth as firebaseAuth } from "@/utils/firebase";
import { authState } from "@/utils/state";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Handles authentication
  const auth = useHookstate(authState);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, auth.set);
  }, []);

  return <Component {...pageProps} />;
}

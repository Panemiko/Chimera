import type { AppProps } from "next/app";
import { onAuthStateChanged } from "firebase/auth";
import "@/styles/globals.css";
import { useEffect } from "react";
import { auth as firebaseAuth } from "@/utils/firebase";
import { useHookstate } from "@hookstate/core";
import { authState } from "@/utils/state";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Handles authentication
  const auth = useHookstate(authState);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, auth.set);
  }, []);

  return <Component {...pageProps} />;
}

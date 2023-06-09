import { useHookstateEffect } from "@hookstate/core";
import { onAuthStateChanged } from "firebase/auth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";
import "@/styles/globals.css";
import { auth as firebaseAuth } from "@/utils/firebase";
import { authState } from "@/utils/state";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Handles authentication
  const auth = useAuth();
  const { push } = useRouter();

  useHookstateEffect(() => {
    // Guarantees the user is signed in and if it is not just loading
    if (auth.user.get()?.isAnonymous) {
      push("/auth/signin");
    }

    if (auth.user.get()?.uid) {
      auth.loading.set(true);
    }
  }, [authState]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, auth.user.set);
  }, []);

  return <Component {...pageProps} />;
}

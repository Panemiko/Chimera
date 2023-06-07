import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

type AuthState = "authed" | "unauthed";

export function useAuthRequire(requiredState: AuthState = "authed") {
  const user = useAuth();
  const { push } = useRouter();

  function handle() {
    // Handles when the user is unauthed but it needs to be
    if (requiredState == "authed" && !user.get()) {
      return push("/auth/signin");
    }

    // The same thing but for authed
    if (requiredState == "unauthed" && user.get()) {
      return push("/");
    }
  }

  useEffect(() => {
    handle();
  }, [user.get()]);
}

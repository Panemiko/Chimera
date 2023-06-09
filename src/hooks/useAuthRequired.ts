import {
  ImmutableObject,
  useHookstate,
  useHookstateEffect,
} from "@hookstate/core";
import { User } from "firebase/auth";
import { useRouter } from "next/router";

import { authState } from "@/utils/state";

import { useAuth } from "./useAuth";

export function useAuthRequired(effect: (user: ImmutableObject<User>) => any) {
  const auth = useAuth();
  const { push } = useRouter();

  useHookstateEffect(() => {
    const currentAuth = auth.get();

    if (!currentAuth.loading && currentAuth.user) {
      effect(currentAuth.user);
    }

    if (!currentAuth.loading && !currentAuth.user) {
      push("/auth/signin");
    }
  }, [authState]);
}

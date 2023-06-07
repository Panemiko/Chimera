import { authState } from "@/utils/state";
import { useHookstate } from "@hookstate/core";

export function useAuth() {
  return useHookstate(authState);
}

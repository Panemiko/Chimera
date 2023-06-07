import { useHookstate } from "@hookstate/core";

import { authState } from "@/utils/state";

export function useAuth() {
  return useHookstate(authState);
}

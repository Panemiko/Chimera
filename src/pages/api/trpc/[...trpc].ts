import * as trpcNext from '@trpc/server/adapters/next'

import { appRouter, createContext } from '@/server/routers/_app'

// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
})

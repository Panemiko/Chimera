import type { inferAsyncReturnType } from '@trpc/server'
import { initTRPC } from '@trpc/server'

import { database } from '@/server/database'

export function createContext() {
  return {
    database,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

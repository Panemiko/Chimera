import type { inferAsyncReturnType } from '@trpc/server'
import { initTRPC } from '@trpc/server'
import EventEmitter from 'events'
import superjson from 'superjson'

import { database } from '@/server/database'

export const ee = new EventEmitter()

export function createContext() {
  return {
    database,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})

export const router = t.router
export const publicProcedure = t.procedure

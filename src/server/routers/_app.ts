import { router } from '@/server/trpc'

import { rpgRouter } from './rpg'

export const appRouter = router({
  rpg: rpgRouter,
})

export type AppRouter = typeof appRouter

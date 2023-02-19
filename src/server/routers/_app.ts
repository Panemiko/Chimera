import { router } from '@/server/trpc'

import { characterRouter } from './character'
import { rpgRouter } from './rpg'

export const appRouter = router({
  rpg: rpgRouter,
  character: characterRouter,
})

export type AppRouter = typeof appRouter

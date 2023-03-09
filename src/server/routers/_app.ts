import { router } from '@/server/trpc'

import { attributeRouter } from './attribute'
import { characterRouter } from './character'
import { rpgRouter } from './rpg'
import { skillRouter } from './skill'

export const appRouter = router({
  attribute: attributeRouter,
  character: characterRouter,
  rpg: rpgRouter,
  skill: skillRouter,
})

export type AppRouter = typeof appRouter

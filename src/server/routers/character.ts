import { z } from 'zod'

import { publicProcedure, router } from '@/server/trpc'

export const characterRouter = router({
  getCharactersByRpg: publicProcedure
    .input(
      z.object({
        rpgId: z.string().cuid2(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { rpgId } = input

      return await ctx.database.character.findMany({
        where: {
          rpgId,
        },
      })
    }),
  getCharacterById: publicProcedure
    .input(
      z.object({
        characterId: z.string().cuid2(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { characterId } = input

      return await ctx.database.character.findUnique({
        where: {
          id: characterId,
        },
      })
    }),
})

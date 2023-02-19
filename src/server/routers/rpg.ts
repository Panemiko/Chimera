import { z } from 'zod'

import { publicProcedure, router } from '@/server/trpc'

export const rpgRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.database.rpg.findMany()
  }),
  getById: publicProcedure
    .input(
      z.object({
        rpgId: z.string().cuid2(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { rpgId } = input

      return await ctx.database.rpg.findUnique({
        where: {
          id: rpgId,
        },
      })
    }),
})

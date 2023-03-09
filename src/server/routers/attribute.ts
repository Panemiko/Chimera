import { z } from 'zod'

import { publicProcedure, router } from '@/server/trpc'

export const attributeRouter = router({
  getAttributesByRpg: publicProcedure
    .input(
      z.object({
        rpgId: z.string().cuid2(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { rpgId } = input

      return await ctx.database.attribute.findMany({
        where: {
          rpgId,
        },
      })
    }),
})

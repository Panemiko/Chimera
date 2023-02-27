import { z } from 'zod'

import { publicProcedure, router } from '@/server/trpc'

export const rpgRouter = router({
  getAllRpgs: publicProcedure.query(async ({ ctx }) => {
    return await ctx.database.rpg.findMany()
  }),
  getRpgById: publicProcedure
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
  createRpg: publicProcedure
    .input(
      z.object({
        name: z.string(),
        author: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, author } = input

      return await ctx.database.rpg.create({
        data: {
          name,
          author,
        },
      })
    }),
})

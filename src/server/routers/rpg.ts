import { publicProcedure, router } from '@/server/trpc'

export const rpgRouter = router({
  selectAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.database.rpg.findMany()
  }),
})

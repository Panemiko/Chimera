import { z } from 'zod'

import { publicProcedure, router } from '@/server/trpc'

export const skillRouter = router({
  getSkillByRpg: publicProcedure
    .input(
      z.object({
        rpgId: z.string().cuid2(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { rpgId } = input

      return await ctx.database.skill.findMany({
        where: {
          rpgId,
        },
      })
    }),
})

import { z } from 'zod'

export const environmentSchema = z.object({
  PORT: z.string().transform((port) => parseInt(port)),
})

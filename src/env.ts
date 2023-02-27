import { z } from 'zod'

export const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z
    .string()
    .optional()
    .transform((port) => {
      if (port) return parseInt(port)
    }),
})

export const env = environmentSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
})

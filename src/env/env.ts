import { environmentSchema } from './schema'

export const env = environmentSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
})

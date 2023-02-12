import { environmentSchema } from './schema'

export const env = environmentSchema.parse(process.env)

import { PrismaClient } from '@prisma/client'

import { env } from '@/env/env'

export const database = global.database || new PrismaClient()

if (env.NODE_ENV !== 'production') {
  global.database = database
}

import { PrismaClient } from '@prisma/client'

import { env } from '@/env'

const dbGlobal = global as unknown as { database: PrismaClient }

export const database = dbGlobal.database || new PrismaClient()

if (env.NODE_ENV !== 'production') {
  dbGlobal.database = database
}

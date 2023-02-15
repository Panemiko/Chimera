import type { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var database: PrismaClient | undefined
}

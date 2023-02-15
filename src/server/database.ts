import { PrismaClient } from '@prisma/client'

export const prisma = global.prisma || new PrismaClient()

if (env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

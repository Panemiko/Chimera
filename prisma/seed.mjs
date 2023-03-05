import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

async function seedDatabase() {
  const database = new PrismaClient()

  await database.rpg.create({
    data: {
      name: faker.word.noun(),
      author: faker.internet.userName(),
    },
  })

  // Create 3 random characters
  for (let i = 0; i <= 3; i++) {
    await database.character.create({
      data: {
        name: faker.name.fullName(),
        age: parseInt(faker.random.numeric(2)),
        level: 1,
        life: 35,
        maxLife: 35,
        sanity: 80,
        maxSanity: 100,
        maxWeight: 13,
        picture: faker.image.avatar(),
        notes: faker.hacker.phrase(),
        rpgId: (await database.rpg.findFirst()).id,
      },
    })
  }
}

seedDatabase()

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const hashedPassword = await bcrypt.hash('test123', 10)
  await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      password: hashedPassword,
      role: 'USER',
    },
  })

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Create equipment items
  const equipment = [
    {
      name: 'Electric Scissor Lift 19ft',
      description: 'Indoor electric scissor lift with 19ft platform height',
      category: 'scissor-lifts',
      dailyRate: 150.00,
    },
    {
      name: 'Articulating Boom Lift 45ft',
      description: 'Diesel-powered articulating boom lift with 45ft height',
      category: 'boom-lifts',
      dailyRate: 350.00,
    },
    {
      name: 'Warehouse Forklift 5000lb',
      description: 'Electric warehouse forklift with 5000lb capacity',
      category: 'material-handling',
      dailyRate: 200.00,
    },
  ]

  for (const item of equipment) {
    await prisma.equipment.upsert({
      where: { name: item.name },
      update: {},
      create: item,
    })
  }

  console.log('Database has been seeded')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
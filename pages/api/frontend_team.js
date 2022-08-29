import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function frontendTeamHandler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();

      console.log('USERS', users);

      res.status(200).json(users);
    } catch (e) {
      res.status(500);
    }
  }

  if (req.method === 'POST') {
    const newUser = JSON.parse(req.body);

    try {
      const user = await prisma.user.create({
        data: {
          name: newUser.name,
          age: +newUser.age,
        },
      });

      res.status(201).json(user);
    } catch (e) {
      res.status(500);
    }
  }

  if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body);

    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });

      res.status(201).json(user);
    } catch (e) {
      res.status(500);
    }
  }

  res.status(404);
}

import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const FrontendTeamFromDb = (props) => {
  console.log('ExampleWithDB', props);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Frontend team</h1>
      {props.users &&
        props.users.map((user) => (
          <p key={user.id}>
            {user.name} - {user.age} age
          </p>
        ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  async function fetchData() {
    try {
      // await prisma.user.create({
      //   data: {
      //     name: 'Oleg',
      //     age: 28,
      //   },
      // });

      // await prisma.user.delete({
      //   where: {
      //     id: 7,
      //   },
      // });

      const users = await prisma.user.findMany();

      console.log('USERS', users);

      await prisma.$disconnect();

      return users;
      // return undefined;
    } catch (e) {
      console.error(e);
      await prisma.$disconnect();
    }
  }

  const users = (await fetchData()) || [];

  return { props: { users } };
};

export default FrontendTeamFromDb;

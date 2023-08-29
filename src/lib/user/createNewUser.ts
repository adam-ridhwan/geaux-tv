import { cache } from 'react';
import bcrypt from 'bcrypt';

import { connectToDatabase } from '@/lib/connectToDatabase';

import 'server-only';

export const createNewUser = cache(async (user: User) => {
  try {
    const { usersCollection } = await connectToDatabase();

    const saltRounds = 10; // this is a good default for bcrypt
    user.password = await bcrypt.hash(user.password, saltRounds);

    await usersCollection.insertOne(user);
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

import { cache } from 'react';

import { connectToDatabase } from '@/lib/connectToDatabase';

import 'server-only';

export const getUser = cache(async (email: String): Promise<User | null> => {
  try {
    const { usersCollection } = await connectToDatabase();
    if (!email) return null;
    return (await usersCollection.findOne({ email })) as WithId<User>;
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

'use server';

import 'server-only';

import { cache } from 'react';
import { User, WithId } from '@/types';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const updateUser = cache(async (email: String, fieldsToUpdate: {}): Promise<(User & WithId<any>) | null> => {
  try {
    const { usersCollection } = await connectToDatabase();
    if (!email) return null;

    await usersCollection.updateOne({ email }, { $set: fieldsToUpdate });
  } catch (error) {
    console.error('Error getting user:', error);
    throw new Error('Error occurred while fetching user');
  }
});

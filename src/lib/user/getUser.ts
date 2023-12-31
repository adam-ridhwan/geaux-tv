'use server';

import 'server-only';

import { cache } from 'react';
import { revalidatePath } from 'next/cache';
import { User, WithId } from '@/types';
import { ObjectId } from 'bson';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const getUser = cache(async (email: String): Promise<(User & WithId<any>) | null> => {
  try {
    const { usersCollection } = await connectToDatabase();
    if (!email) return null;

    return await usersCollection.findOne({ email });
  } catch (error) {
    console.error('Error getting user:', error);
    throw new Error('Error occurred while fetching user');
  }
});

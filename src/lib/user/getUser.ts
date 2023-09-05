'use server';

import 'server-only';

import { cache } from 'react';
import { revalidatePath } from 'next/cache';
import { User, WithId } from '@/types';
import { ObjectId } from 'bson';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const getUser = cache(async (email: String): Promise<User | null> => {
  try {
    const { usersCollection } = await connectToDatabase();
    if (!email) return null;

    const user = await usersCollection.findOne({ email });

    if (!user) return null;

    // Sanitize the user object
    const sanitizedUser: User & WithId<any> = {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      lastLogin: user.lastLogin.toISOString(),
    };

    return sanitizedUser as User;
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

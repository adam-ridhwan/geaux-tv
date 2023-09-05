'use server';

import 'server-only';

import { cache } from 'react';
import { revalidatePath } from 'next/cache';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const getUser = cache(async (email: String): Promise<User | null> => {
  try {
    const { usersCollection } = await connectToDatabase();
    if (!email) return null;

    const user = await usersCollection.findOne({ email });

    if (!user) return null;

    // Sanitize the user object
    const sanitizedUser: User = {
      ...user,
      _id: user._id.toString(), // Convert ObjectId to string
      createdAt: user.createdAt.toISOString(), // Convert Date to string
      updatedAt: user.updatedAt.toISOString(), // Convert Date to string
      lastLogin: user.lastLogin.toISOString(), // Convert Date to string
    };

    return sanitizedUser as User;
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

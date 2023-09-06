'use server';

import 'server-only';

import { cache } from 'react';
import { User } from '@/types';
import bcrypt from 'bcrypt';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const createUser = cache(async (user: User) => {
  try {
    const { usersCollection } = await connectToDatabase();

    const newUser: User = {
      age: user.age || 0,
      createdAt: user.createdAt || new Date(),
      email: user.email,
      emailVerified: user.emailVerified || false,
      favoriteChannels: user.favoriteChannels || [],
      gender: user.gender || '',
      lastLogin: user.lastLogin || new Date(),
      name: user.name,
      phone: user.phone || '',
      provider: user.provider,
      updatedAt: user.updatedAt || new Date(),
    };

    if (user.provider === 'credentials' && user.password) {
      newUser.password = await bcrypt.hash(user.password, 10);
      newUser.photoUrl = user.photoUrl || '';
    }

    const existingUser = await usersCollection.findOne({ email: newUser.email });
    if (existingUser) return console.error('User already exists');

    await usersCollection.insertOne(newUser);
  } catch (error) {
    console.error('Error creating new user:', error);
    throw new Error('Error occurred while creating new user');
  }
});

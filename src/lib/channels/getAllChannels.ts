'use server';

import 'server-only';

import { cache } from 'react';

import { connectToDatabase } from '@/lib/connectToDatabase';

export const getAllChannels = cache(async () => {
  try {
    const { channelsCollection } = await connectToDatabase();
    return await channelsCollection.findOne({}, { projection: { _id: 0 } });
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

import { cache } from 'react';

import { connectToDatabase } from '@/database/mongodb';

export const getAllChannels = cache(async () => {
  try {
    const { db } = await connectToDatabase();
    const collectionName = 'channels';
    const collection = db.collection(collectionName);
    return await collection.findOne({}, { projection: { _id: 0 } });
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

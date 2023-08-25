import { cache } from 'react';

import { clientPromise } from '@/database/mongodb';

export const getAllChannels = cache(async () => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DATABASE as string);
    const collection = db.collection(process.env.MONGODB_CHANNEL_COLLECTION as string);
    return await collection.findOne({}, { projection: { _id: 0 } });
  } catch (error) {
    console.error('Error getting channels:', error);
    throw new Error('Error occurred while fetching channels');
  }
});

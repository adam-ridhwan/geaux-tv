import { cache } from 'react';

import { connectToDatabase } from '@/database/mongodb';

export const getAllChannels = cache(async () => {
  const { db } = await connectToDatabase();
  const collectionName = 'channels';
  const collection = db.collection(collectionName);
  return await collection.findOne({}, { projection: { _id: 0 } });
});

import env from '@/utils/env';

import { clientPromise } from '@/database/mongodb';

const { MONGODB_DATABASE, MONGODB_CHANNELS_COLLECTION, MONGODB_USERS_COLLECTION } = env;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);
  const channelsCollection = db.collection(MONGODB_CHANNELS_COLLECTION);
  const usersCollection = db.collection(MONGODB_USERS_COLLECTION);

  return { channelsCollection, usersCollection };
};

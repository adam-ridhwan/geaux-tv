import env from '@/util/env';

import { clientPromise } from '@/database/mongodb';

import 'server-only';

const { MONGODB_DATABASE, MONGODB_CHANNELS_COLLECTION } = env;

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);
  const channelsCollection = db.collection(MONGODB_CHANNELS_COLLECTION);

  return { channelsCollection };
};

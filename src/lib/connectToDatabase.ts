import { clientPromise } from '@/database/mongodb';

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DATABASE as string);
  const channelsCollection = db.collection(process.env.MONGODB_CHANNELS_COLLECTION as string);

  return { channelsCollection };
};

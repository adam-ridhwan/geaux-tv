import { connectToDatabase } from '@/database/mongodb';

export async function getAllChannels() {
  const { db } = await connectToDatabase();
  const collectionName = 'channels';
  const collection = db.collection(collectionName);
  return await collection.find({}).toArray();
}

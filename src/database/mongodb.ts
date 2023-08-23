import { Db, MongoClient, MongoClientOptions } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    console.log('\x1b[97m\x1b[48;5;22m%s\x1b[0m', '=> using CACHED database instance');

    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const options: MongoClientOptions = {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  if (!MONGODB_URI) throw new Error('Define the MONGODB_URI environmental variable');
  if (!MONGODB_DB) throw new Error('Define the MONGODB_DB environmental variable');

  const client = await MongoClient.connect(MONGODB_URI, options);
  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;
  console.log('\x1b[97m\x1b[48;5;88m%s\x1b[0m', '=> using NEW database instance');

  return {
    client,
    db,
  };
}

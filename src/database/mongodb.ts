import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env');
}

// @ts-ignore
let cached = global.mongo;

if (!cached) {
  // @ts-ignore
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // @ts-ignore
    cached.promise = MongoClient.connect(MONGODB_URI, options).then(client => {
      return {
        client,
        db: client.db(MONGODB_DB),
      };
    });
  }

  // Return the cached promise
  cached.conn = await cached.promise;
  return cached.conn;
}

// import { MongoClient } from 'mongodb';
//
// const { MONGODB_URI, MONGODB_DB } = process.env;
//
// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env');
// }
//
// if (!MONGODB_DB) {
//   throw new Error('Please define the MONGODB_DB environment variable inside .env');
// }
//
// let cached = global.mongo;
//
// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }
//
// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//
//   if (!cached.promise) {
//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };
//
//     cached.promise = MongoClient.connect(MONGODB_URI, options).then(client => {
//       return {
//         client,
//         db: client.db(MONGODB_DB),
//       };
//     });
//   }
//
//   // Return the cached promise
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

import { Db, MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  // const options: MongoClientOptions = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };

  // check the MongoDB URI
  if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
  }
  // check the MongoDB DB
  if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
  }

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI);
  await client.connect();
  let db = client.db(MONGODB_DB);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}

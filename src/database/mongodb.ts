import { MongoClient, MongoClientOptions } from 'mongodb';
import env from '@/util/env';

const { MONGODB_URI, MONGODB_DATABASE, NODE_ENV } = env;

const options: MongoClientOptions = {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!MONGODB_URI) throw new Error('Define the MONGODB_URI environmental variable');
if (!MONGODB_DATABASE) throw new Error('Define the MONGODB_DATABASE environmental variable');

if (NODE_ENV === 'development') {
  /**
   * In development mode, use a global variable so that the value
   * is preserved across module reloads caused by HMR (Hot Module Replacement).
   */
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;

  console.log('\x1b[97m\x1b[48;5;22m%s\x1b[0m', '=> using CACHED database instance');
} else {
  // production
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
  
  console.log('\x1b[97m\x1b[48;5;88m%s\x1b[0m', '=> using NEW database instance');
}

export { clientPromise };

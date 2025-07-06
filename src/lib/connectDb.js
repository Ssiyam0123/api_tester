import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Reuse the client connection
let cachedClient = null;

export async function connectDb(collectionName) {
  if (!cachedClient) {
    await client.connect();
    cachedClient = client;
  }

  return cachedClient.db(process.env.DB_NAME).collection(collectionName);
}

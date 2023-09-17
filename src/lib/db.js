import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Mengambil URL dari variabel lingkungan
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

const connectDatabase = async () => {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db();
  }
};

export { connectDatabase, db };

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);

export default client;

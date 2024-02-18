import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_MONGODB_URI
    : process.env.MONGODB_URI
);

export default client;

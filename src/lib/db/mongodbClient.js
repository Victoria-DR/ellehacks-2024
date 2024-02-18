import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://vercel-admin-user-65d0464c5fbc4a6154f3058b:F5qn7JfI4SCCP9Aj@ellehacks2024.admgxce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

export default client;

import { ObjectId } from "mongodb";
import client from "../mongodbClient";

const getUser = async (userId) => {
  try {
    const users = client.db("game").collection("users");
    const query = { _id: new ObjectId(userId) };
    const response = await users.findOne(query);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getUser;

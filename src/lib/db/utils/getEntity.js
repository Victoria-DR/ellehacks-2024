import { ObjectId } from "mongodb";
import client from "../mongodbClient";

const getEntity = async (entityId) => {
  try {
    const sprites = client.db("game").collection("entities");
    const query = { _id: new ObjectId(entityId) };
    const response = await sprites.findOne(query);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getEntity;

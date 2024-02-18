import { ObjectId } from "mongodb";
import client from "../mongodbClient";

const getEntity = async (entityId) => {
  try {
    const entities = client.db("game").collection("entities");
    const query = { _id: new ObjectId(entityId) };
    const response = await entities.findOne(query);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getEntity;

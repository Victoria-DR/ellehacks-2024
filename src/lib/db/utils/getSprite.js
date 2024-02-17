import { ObjectId } from "mongodb";
import client from "../mongodbClient";

const getSprite = async (spriteId) => {
  try {
    const sprites = client.db("game").collection("sprites");
    const query = { _id: new ObjectId(spriteId) };
    const response = await sprites.findOne(query);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getSprite;

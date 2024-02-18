import client from "../mongodbClient";

const getRandomEntity = async () => {
  try {
    const entities = client.db("game").collection("entities");
    const cursor = await entities.find({});
    const documents = await cursor.toArray();
    const cursorLength = await entities.countDocuments({});

    if (cursorLength === 0) {
      console.log("No documents found!");
    }

    const randomIndex = Math.floor(Math.random() * cursorLength);
    return documents[randomIndex];
  } catch (err) {
    console.log(err);
  }
};

export default getRandomEntity;

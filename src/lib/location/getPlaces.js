import getLibraries from "./getLibraries";
import getParks from "./getParks";

const getPlaces = async (coordinates) => {
  const parks = await getParks(coordinates);
  const libraries = await getLibraries(coordinates);
  return {
    parks: parks,
    libraries: libraries,
  };
};

export default getPlaces;

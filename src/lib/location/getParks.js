const getParks = async (coordinates) => {
  const currentLocation = new google.maps.LatLng(
    coordinates.lat,
    coordinates.lng
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    center: currentLocation,
  });

  const request = {
    location: currentLocation,
    radius: "500",
    type: ["park"],
  };

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  const response = JSON.parse(localStorage.getItem("parkPlaces"));
  return response;
};

const callback = async (results, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    const data = [];
    for (let i = 0; i < results.length; i++) {
      const { geometry, name, types } = results[i];
      data.push({
        name: name,
        types: types,
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      });
    }
    localStorage.setItem("parkPlaces", JSON.stringify(data));
  }
};

export default getParks;

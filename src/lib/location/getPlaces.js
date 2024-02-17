let response = [];

const getPlaces = async (coordinates, radius, placeType) => {
  response = [];

  const currentLocation = new google.maps.LatLng(
    coordinates.latitude,
    coordinates.longitude
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    center: currentLocation,
  });

  const request = {
    location: currentLocation,
    radius: radius,
    type: [placeType],
  };

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  return response;
};

const callback = (results, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      const { geometry } = results[i];
      response.push({
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      });
    }
  }
};

export default getPlaces;

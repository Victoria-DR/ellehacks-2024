"use client";

import { useEffect, useState } from "react";
import getPlaces from "@/lib/location/getPlaces";

export default function Page() {
  const [coordinates, setCoordinates] = useState({});
  const [parks, setParks] = useState([]);
  const [libraries, setLibraries] = useState([]);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 5000,
  };

  const success = (pos) => {
    setCoordinates(pos.coords);
  };

  const error = (err) => {
    console.log(err);
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      await navigator.geolocation.getCurrentPosition(success, error, options);
    };
    // fetchCoordinates();
    // console.log(coordinates);

    const fetchParks = async () => {
      const parksData = await getPlaces(coordinates, "500", "park");
      setParks(parksData);
    };
    // fetchParks();
    // console.log(parks);

    const fetchLibraries = async () => {
      const librariesData = await getPlaces(coordinates, "500", "library");
      setLibraries(librariesData);
    };
    // fetchLibraries();

    const fetchData = async () => {
      while (
        coordinates.latitude === undefined ||
        coordinates.longitude === undefined
      ) {
        fetchCoordinates();
        console.log(coordinates);
      }
      fetchParks();
      fetchLibraries();
    };
    fetchData();

    console.log(libraries);
  });
  return <p id="map">Catch Page</p>;
}

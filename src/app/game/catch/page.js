"use client";

import { useEffect, useRef, useState } from "react";
import getPlaces from "@/lib/location/getPlaces";

export default function Page() {
  const coordinates = useRef({});
  const [parks, setParks] = useState([]);
  const [libraries, setLibraries] = useState([]);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 5000,
  };

  const success = (pos) => {
    coordinates.current = pos.coords;
  };

  const error = (err) => {
    console.log(err);
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      await navigator.geolocation.getCurrentPosition(success, error, options);
    };
    while (!coordinates.current.latitude) {
      fetchCoordinates();
    }

    const fetchParks = async () => {
      const parksData = await getPlaces(coordinates.current, "500", "park");
      setParks(parksData);
    };
    fetchParks();

    const fetchLibraries = async () => {
      const librariesData = await getPlaces(
        coordinates.current,
        "500",
        "library"
      );
      setLibraries(librariesData);
    };
    fetchLibraries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <p id="map">Catch Page</p>;
}

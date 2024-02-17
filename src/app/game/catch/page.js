"use client";

import { useEffect, useRef } from "react";
import getPlaces from "@/lib/location/getPlaces";

export default function Page() {
  const coordinates = useRef({ lat: "43.772188", lng: "-79.506687" });
  const parks = useRef([]);
  const libraries = useRef([]);

  const fetchGamePlaces = async () => {
    const data = await getPlaces(coordinates.current);
    parks.current = data.parks;
    libraries.current = data.libraries;
  };

  useEffect(() => {
    fetchGamePlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p id="map">Catch Page</p>;
}

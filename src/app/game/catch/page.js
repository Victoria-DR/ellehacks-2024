"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [coordinates, setCoordinates] = useState({});

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
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

    fetchCoordinates();
    console.log("Location: ", coordinates);
  });
  return <p>Catch Page</p>;
}

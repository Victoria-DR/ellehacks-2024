"use client";

import { useEffect, useRef, useState } from "react";
import getPlaces from "@/lib/location/getPlaces";

export default function Page() {
  const coordinates = useRef({ lat: "43.772188", lng: "-79.506687" });
  const [domLoaded, setDomLoaded] = useState(false);
  const parks = useRef([]);
  const libraries = useRef([]);

  const fetchGamePlaces = async () => {
    const data = await getPlaces(coordinates.current);
    parks.current = data.parks;
    libraries.current = data.libraries;
  };

  useEffect(() => {
    fetchGamePlaces();
    setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {domLoaded && (
        <div>
          <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
            renderer="antialias: true; alpha: true"
          >
            <a-camera
              gps-projected-camera="gpsMinDistance: 5"
              cursor="rayOrigin: mouse"
              raycaster="objects: .tap-interaction"
            ></a-camera>
            <a-entity
              class="tap-interaction"
              material="color: red"
              geometry="primitive: box"
              gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
              position="40 -15 0"
              scale="10 10 10"
              tap-interaction
            ></a-entity>
          </a-scene>

          {/* <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
          renderer="antialias: true; alpha: true"
        >
          <a-camera gps-projected-camera="gpsMinDistance: 5" cursor="rayOrigin: mouse"
            raycaster="objects: .tap-interaction"></a-camera>
          <a-entity
            class="tap-interaction"
            material="color: yellow"
            geometry="primitive: cylinder"
            gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
            position="-30 -15 0"
            scale="10 10 10"
            tap-interaction
          ></a-entity>
          <a-text
            value="Subject Title"
            position="-31 -15 0"
            look-at="[gps-camera]"
            scale="5 5 5"
          ></a-text>
        </a-scene> */}
        </div>
      )}
      <div id="map" style={{ width: 0, height: 0 }}></div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [domRendered, setDomRendered] = useState(false);

  useEffect(() => {
    setDomRendered(true);
  }, []);

  return (
    <div>
      {domRendered && (
        <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
          renderer="antialias: true; alpha: true"
        >
          <a-camera gps-projected-camera="gpsMinDistance: 5"></a-camera>
          <a-entity
            material="color: red"
            geometry="primitive: box"
            gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
            position="40 -15 0"
            scale="10 10 10"
          ></a-entity>
          <a-entity position="40 -10 0">
            <a-text
              value="Red Box"
              shader="msdf"
              color="black"
              scale="2 2 2"
              align="center"
            ></a-text>
          </a-entity>

          <a-entity
            material="color: green"
            geometry="primitive: cylinder"
            gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
            position="-30 -15 0"
            scale="10 10 10"
          ></a-entity>
          <a-entity position="-30 -10 0">
            <a-text
              value="Green Cylinder"
              shader="msdf"
              color="black"
              scale="2 2 2"
              align="center"
            ></a-text>
          </a-entity>
        </a-scene>
      )}
    </div>
  );
}

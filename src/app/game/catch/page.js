"use client";

import "./styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BadgeButton from "@/app/components/BadgeButton";
import star01 from "@/app/assets/images/star01.png";
import star02 from "@/app/assets/images/star02.png";
import star03 from "@/app/assets/images/star03.png";

export default function Page() {
  const [domRendered, setDomRendered] = useState(false);
  const [entityCaught, setEntityCaught] = useState(false);
  const [starCount, setStarCount] = useState(0);

  const handleClick = () => {
    if (starCount >= 3) {
      setEntityCaught(true);
      setStarCount(0);
      console.log("quiz open");
    } else {
      setStarCount(starCount + 1);
      console.log("test");
    }
  };

  useEffect(() => {
    setDomRendered(true);
  }, []);

  return (
    <div className="catch-page-wrapper" onClick={handleClick}>
      <Link href="/game/badges">
        <BadgeButton />
      </Link>
      {starCount > 0 && (
        <Image id="star-1" className="catch-star" src={star01} alt="1 star" />
      )}
      {starCount > 1 && (
        <Image id="star-2" className="catch-star" src={star02} alt="1 stars" />
      )}
      {starCount > 2 && (
        <Image id="star-3" className="catch-star" src={star03} alt="3 stars" />
      )}
      {entityCaught && <h1>entity caught</h1>}
      {domRendered && (
        <div>
          <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
            renderer="antialias: true; alpha: true"
          >
            <a-camera gps-projected-camera="gpsMinDistance: 5"></a-camera>
            {!entityCaught && (
              <a-entity
                material="color: red"
                geometry="primitive: box"
                gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
                position="40 -15 0"
                scale="10 10 10"
              ></a-entity>
            )}

            {!entityCaught && (
              <a-entity
                material="color: green"
                geometry="primitive: cylinder"
                gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
                position="-30 -15 0"
                scale="10 10 10"
              ></a-entity>
            )}
          </a-scene>
        </div>
      )}
    </div>
  );
}

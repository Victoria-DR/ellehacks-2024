"use client";

import "./styles.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BadgeButton from "@/app/components/BadgeButton";
import EntityQuiz from "@/app/components/EntityQuiz";
import star01 from "@/app/assets/images/star01.png";
import star02 from "@/app/assets/images/star02.png";
import star03 from "@/app/assets/images/star03.png";

export default function Page() {
  const entity = useRef({});
  const [domRendered, setDomRendered] = useState(false);
  const [entityQuiz, setEntityQuiz] = useState(false);
  const [starCount, setStarCount] = useState(0);

  const handleClick = () => {
    if (starCount >= 3) {
      setEntityQuiz(true);
      setStarCount(0);
    } else {
      setStarCount(starCount + 1);
    }
  };

  const getEntity = async () => {
    const response = await fetch("/api/randomEntity", {
      method: "GET",
    });
    const data = await response.json();
    entity.current = data;
  };

  useEffect(() => {
    getEntity();
    setDomRendered(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="catch-page-wrapper" onClick={handleClick}>
      <Link href="/game/badges">
        <BadgeButton />
      </Link>
      {!entityQuiz && starCount > 0 && (
        <Image id="star-1" className="catch-star" src={star01} alt="1 star" />
      )}
      {!entityQuiz && starCount > 1 && (
        <Image id="star-2" className="catch-star" src={star02} alt="1 stars" />
      )}
      {!entityQuiz && starCount > 2 && (
        <Image id="star-3" className="catch-star" src={star03} alt="3 stars" />
      )}
      {entityQuiz && (
        <EntityQuiz
          title={entity.current.title}
          description={entity.current.description}
          question={entity.current.question}
          option1={entity.current.option1}
          option2={entity.current.option2}
          option3={entity.current.option3}
          imageUri={entity.current.imageUri}
        />
      )}
      {domRendered && (
        <div>
          <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
            renderer="antialias: true; alpha: true"
          >
            <a-camera gps-projected-camera="gpsMinDistance: 5"></a-camera>

            <a-assets>
              <a-asset-item
                id="blazing-star"
                src="/app/assets/gltf/wildflower_bouquet/scene.gltf"
              ></a-asset-item>
            </a-assets>

            {!entityQuiz && (
              <a-entity
                gltf-model="#blazing-star"
                gps-projected-entity-place="latitude: 43.772188; longitude: -79.506687"
                position="40 -15 0"
                scale="40 -15 0"
              ></a-entity>
            )}
          </a-scene>
        </div>
      )}
    </div>
  );
}

import React from "react";
import "../badges/styles.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import badge1 from "../../assets/images/badge1.png";
import badge2 from "../../assets/images/badge2.png";
import badge3 from "../../assets/images/badge3.png";
import emptyBadge from "../../assets/images/emptybadge.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const badgeImages = [
    badge1,
    badge2,
    badge3,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
    emptyBadge,
  ];

  return (
    <div className="page-container" style={{ backgroundColor: "#fff" }}>
      <div className="title-container">
        <div className="title-container">
          <h1 style={{ color: "#000" }}> Your Badges </h1>
        </div>
        <div className="exit-button-container"></div>
      </div>
      <div className="content-container">
        <Link href="/game/catch">
          <FontAwesomeIcon
            icon={faTimes}
            style={{ color: "#000", fontSize: "2em" }}
          />
        </Link>
        <div className="grid-container">
          {badgeImages.map((image, index) => (
            <Image
              className="image"
              key={index}
              src={image}
              alt={`badge${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

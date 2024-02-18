import React from "react";
import "../badges/styles.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import badge1 from "../../assets/images/badge1.png";
import badge2 from "../../assets/images/badge2.png";
import badge3 from "../../assets/images/badge3.png";
import badge4 from "../../assets/images/emptybadge.png";
import badge5 from "../../assets/images/emptybadge.png";
import badge6 from "../../assets/images/emptybadge.png";
import badge7 from "../../assets/images/emptybadge.png";
import badge8 from "../../assets/images/emptybadge.png";
import badge9 from "../../assets/images/emptybadge.png";
import badge10 from "../../assets/images/emptybadge.png";
import badge11 from "../../assets/images/emptybadge.png";
import badge12 from "../../assets/images/emptybadge.png";
import Image from "next/image";

export default function Page() {
  const badgeImages = [
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6,
    badge7,
    badge8,
    badge9,
    badge10,
    badge11,
    badge12,
  ];

  return (
    <div className="page-container">
      <div className="title-container">
        <div className="title-container">
          <h1> Your Badges </h1>
        </div>
        <div className="exit-button-container"></div>
      </div>
      <div className="content-container">
        <div>
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: "2em" }} />
        </div>
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

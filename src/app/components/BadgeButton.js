import "../assets/styles/badgeButton.css";
import Image from "next/image";
import badgeButtonSvg from "../assets/images/badgeButton.svg";

const BadgeButton = () => {
  return (
    <div className="badge-button-wrapper">
      <button className="badge-button">
        <Image
          className="badge-button-image"
          src={badgeButtonSvg}
          alt="badge button"
        />
      </button>
    </div>
  );
};

export default BadgeButton;

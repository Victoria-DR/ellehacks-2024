"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Handle the captured image as needed
    console.log(imageSrc);
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={"100vh"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={"100vw"}
      />
    </div>
  );
};

export default WebcamComponent;

"use client";
// // pages/index.js (or HomePage.js)
// import React, { useEffect } from "react";
// import ARScene from "../../components/ARScene";

// const HomePage = () => {
//   useEffect(() => {
//     // Dynamically import ARComponent and load necessary scripts
//     import("../../components/ARComponent").then((ARComponentModule) => {
//       const ARComponent = ARComponentModule.default;
//       // Load additional scripts here if needed
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Your Next.js App</h1>
//       <div id="ar-component-container">
//         {/* Placeholder for ARComponent */}
//         <ARScene />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// pages/ar.js
// ARPage.js

import Head from "next/head";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ARPage = () => {
  useEffect(() => {
    // Perform any client-side logic here
    // For example, you may want to initialize AR-related functionality
  }, []);

  return (
    <>
      <Head>
        <title>AR.js A-Frame Location-based</title>
      </Head>
      <Helmet>
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
        <script
          type="text/javascript"
          src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js"
        ></script>
        <script
          type="text/javascript"
          src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"
        ></script>
      </Helmet>

      <div>
        {/* Your A-Frame content */}
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
        </a-scene>

        <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
          renderer="antialias: true; alpha: true"
        >
          <a-camera gps-projected-camera="gpsMinDistance: 5"></a-camera>
          <a-entity
            material="color: yellow"
            geometry="primitive: cylinder"
            gps-projected-entity-place="latitude: 79.50627305573806; longitude: 43.77250049156359"
            position="-30 -15 0"
            scale="10 10 10"
          ></a-entity>
          <a-text
            value="Subject Title"
            position="-31 -15 0"
            look-at="[gps-camera]"
            scale="5 5 5"
          ></a-text>
        </a-scene>
      </div>
    </>
  );
};

export default ARPage;

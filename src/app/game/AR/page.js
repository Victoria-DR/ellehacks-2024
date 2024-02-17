"use client";
// pages/index.js (or HomePage.js)
import React, { useEffect } from "react";
import ARScene from "../../components/ARScene";

const HomePage = () => {
  useEffect(() => {
    // Dynamically import ARComponent and load necessary scripts
    import("../../components/ARComponent").then((ARComponentModule) => {
      const ARComponent = ARComponentModule.default;
      // Load additional scripts here if needed
    });
  }, []);

  return (
    <div>
      <h1>Your Next.js App</h1>
      <div id="ar-component-container">
        {/* Placeholder for ARComponent */}
        <ARScene />
      </div>
    </div>
  );
};

export default HomePage;

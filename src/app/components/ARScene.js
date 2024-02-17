// components/ARScene.js
import React, { useEffect } from "react";

const ARScene = () => {
  useEffect(() => {
    // A-Frame and AR.js initialization code
    const loadScripts = async () => {
      // Load A-Frame and AR.js scripts
      const scripts = [
        "https://aframe.io/releases/0.9.2/aframe.min.js",
        "https://raw.githack.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js",
        "https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js",
      ];

      await Promise.all(scripts.map(loadScript));

      // Set THREEx.ArToolkitContext.baseURL after scripts are loaded
      if (typeof THREEx !== "undefined") {
        THREEx.ArToolkitContext.baseURL =
          "https://raw.githack.com/jeromeetienne/ar.js/master/three.js/";
      }
    };

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadScripts();
  }, []);

  return (
    <div style={{ margin: 0, overflow: "hidden" }}>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-camera gps-camera rotation-reader></a-camera>
        <a-entity
          gltf-model="./assets/magnemite/scene.gltf"
          rotation="0 180 0"
          scale="0.15 0.15 0.15"
          gps-entity-place="longitude: 12.489820; latitude: 41.892590;"
          animation-mixer
        />
      </a-scene>
    </div>
  );
};

export default ARScene;

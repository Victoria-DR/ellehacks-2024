// components/ARComponent.js
"use client";

// // ARComponent.js
// import React, { useEffect } from 'react';

// const ARComponent = () => {
//   useEffect(() => {
//     // Your A-Frame initialization code here
//   }, []);

//   return (
//     <div style={{ margin: 0, overflow: 'hidden' }}>
//       <a-scene embedded>
//         {/* Add your A-Frame content or entities here */}
//         <a-camera gps-camera rotation-reader></a-camera>
//       </a-scene>
//     </div>
//   );
// };

// export default ARComponent;

import React, { useEffect } from "react";

const ARComponent = () => {
  useEffect(() => {
    // AR.js initialization code here
    // You can use A-Frame components, AR.js features, etc.
  }, []);

  return (
    <div>
      <a-scene embedded arjs="sourceType: webcam;">
        <a-camera></a-camera>
      </a-scene>
    </div>
  );
};

export default ARComponent;

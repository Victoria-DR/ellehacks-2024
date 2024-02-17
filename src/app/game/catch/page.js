// import React from "react";
// import WebcamComponent from "../../components/WebcamComponent";

// const Page = () => {
//   return (
//     <div>
//       <h1>Webcam App</h1>
//       <WebcamComponent />
//     </div>
//   );
// };

// export default Page;

// pages/index.js

import ARPage from "../../game/AR/page.js";

const HomePage = () => {
  return (
    <div>
      {/* Your other Next.js page content */}
      <h1>Welcome to My Next.js App</h1>

      {/* Include the ARPage component */}
      <ARPage />
    </div>
  );
};

export default HomePage;

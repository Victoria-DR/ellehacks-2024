import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElleHacks 2024",
  description: "",
};

export default function RootLayout({ children }) {
  const placesUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;

  return (
    <html lang="en">
      <head>
        <script src={placesUri} async />
        <script
          src="https://cdn.jsdelivr.net/gh/aframevr/aframe@master/dist/aframe-master.min.js"
          async
        />
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js" async />
        <script
          src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js"
          async
        />
        <script
          src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"
          async
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

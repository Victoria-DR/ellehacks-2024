import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sun Rush",
  description: "",
};

export default function RootLayout({ children }) {
  const placesUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;

  return (
    <html lang="en">
      <head>
        <script src={placesUri} async />
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js" async />
        <script
          type="text/javascript"
          src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js"
          async
        />
        <script
          type="text/javascript"
          src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"
          async
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <UserProvider loginUrl="/api/auth/login" profileUrl="/api/auth/me">
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}

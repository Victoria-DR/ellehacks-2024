"use client";

import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();

  useEffect(() => {
    location.assign("/api/auth/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main style={{ width: "100vw", backgroundColor: "#fff" }}></main>;
}

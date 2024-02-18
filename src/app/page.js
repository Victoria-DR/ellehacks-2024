"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BadgeButton from "./components/BadgeButton";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/game/catch");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ width: "100vw", backgroundColor: "#fff" }}>
      <Link href="/game/badges">
        <BadgeButton />
      </Link>
    </main>
  );
}

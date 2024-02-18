import Link from "next/link";
import BadgeButton from "./components/BadgeButton";

export default function Home() {
  return (
    <main style={{ width: "100vw", backgroundColor: "#fff" }}>
      <Link href="/game/badges">
        <BadgeButton />
      </Link>
    </main>
  );
}

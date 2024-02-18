import getRandomEntity from "@/lib/db/utils/getRandomEntity";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getRandomEntity();
  return new NextResponse(JSON.stringify(response));
}

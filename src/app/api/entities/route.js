import getEntity from "@/lib/db/utils/getEntity";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getEntity("65d18e416296b4f95f9a1c54");
  return new NextResponse(JSON.stringify(response));
}

import getEntity from "@/lib/db/utils/getEntity";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const response = await getEntity(id);
  return new NextResponse(JSON.stringify(response));
}

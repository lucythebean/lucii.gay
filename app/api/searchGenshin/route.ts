import { NextResponse } from "next/server";
import { searchFolder } from "genshin-db";
import keyify from "../../../public/parse";

export async function POST(request: Request): Promise<NextResponse> {
  const { folder, query } = await request.clone().json();
  console.log("folder: " + folder + " query: " + query);
  var res = keyify(searchFolder(folder, query));
  return NextResponse.json(res);
}

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  const query = searchParams.get("query");
  console.log("folder: " + folder + " query: " + query);
  var res = keyify(searchFolder(folder, query));
  return NextResponse.json(res);
}

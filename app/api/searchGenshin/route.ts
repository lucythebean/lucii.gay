import { NextResponse } from "next/server";
import { searchFolder } from "genshin-db";
import keyify from "../../../public/parse";

export async function POST(request: Request) {
  const { folder, query } = await request.json();
  let res: object;
  try {
    res = keyify(searchFolder(folder, query));
  } catch {
    console.log(`Search failed with terms: ${folder} and ${query}.`);
    res = { keys: `Err: Search failed. Double check your search terms!` };
  }
  return NextResponse.json(res);
}

export async function GET() {
  return NextResponse.json({ res: "You got me :(" });
}

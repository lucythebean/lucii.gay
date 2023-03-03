import { NextResponse } from "next/server";
import { searchFolder } from "genshin-db";
import keyify from "../../../public/parse";

export async function POST(request: Request): Promise<NextResponse> {
  const { folder, query } = await request.clone().json();
  console.log("folder: " + folder + " query: " + query);
  let res = () => {
    var res: object;
    try {
      res = keyify(searchFolder(folder, query));
      console.log("Search succeded!");
    } catch (err) {
      console.log(`Search failed with terms: ${folder} and ${query}.`);
      console.log(`Err: ${err}`);
      res = { keys: `Err: Search failed. Double check your search terms!` };
    }
    return res;
  };
  return NextResponse.json(res());
}

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  const query = searchParams.get("query");
  console.log("folder: " + folder + " query: " + query);
  let res = () => {
    var res: object;
    try {
      res = keyify(searchFolder(folder, query));
      console.log("Search succeded!");
    } catch (err) {
      console.log(`Search failed with terms: ${folder} and ${query}.`);
      console.log(`Err: ${err}`);
      res = { keys: `Err: Search failed. Double check your search terms!` };
    }
    return res;
  };
  return NextResponse.json(res());
}

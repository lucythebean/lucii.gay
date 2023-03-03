import { NextResponse } from "next/server";
import { searchFolder } from "genshin-db";
import keyify from "../../../public/parse";

export async function POST(request: Request): Promise<NextResponse> {
  const { folder, query } = await request.json();
  console.log("folder: " + folder + " query: " + query);
  let res = () => {
    var res: object;
    try {
      res = { keys: "Results go here" };
      //res = keyify(searchFolder(folder, query));
      console.log("Search succeded!");
    } catch (err) {
      console.log(`Search failed with terms: ${folder} and ${query}.`);
      console.log(`Err: ${err}`);
      res = { keys: `Err: Search failed. Double check your search terms!` };
    }
    console.log("RES: " + res);
    return res;
  };
  console.log("search: " + searchFolder("talents", "hutao"));
  return NextResponse.json(res());
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ res: "You got me :(" });
}

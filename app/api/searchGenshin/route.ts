import { NextResponse } from "next/server";
import { searchFolder } from "genshin-db";
import keyify from "../../../public/parse";

export async function POST(request: Request): Promise<NextResponse> {
  const { folder, query } = await request.clone().json();
  console.log("folder: " + folder + " query: " + query);
  try {
    var res = {
      main: keyify(searchFolder(folder,query,{matchCategories:true})),
    };
    console.log("Success! Not an error!");
  } catch (err) {
    console.log(`Error!!! Log: ${err}`);
    res = { main: [`ERR: Something has gone wrong! Log as follows: ${err}`] };
  }
  return NextResponse.json(res);
}

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  const query = searchParams.get("query");
  try {
    var res = keyify(searchFolder(folder, query, { matchCategories: true }));
    console.log("Success! Not an error!");
  } catch (err) {
    console.error("error", err);
    res = { key: `ERR: Something has gone wrong! Log as follows: ${err}` };
  }
  return NextResponse.json(res);
}

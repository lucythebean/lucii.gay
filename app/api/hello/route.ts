import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ name: "John Doe" });
}

export async function POST(){
  console.log("Hello got POSTed!")
  return NextResponse.redirect('/results')
}
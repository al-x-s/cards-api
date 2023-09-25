import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get("count");
  const url = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${count}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // if you were to use an API KEY this is where you'd add it like "X_API-key": process.env.NAME_OF_VARIABLE
    },
  });

  const data = await response.json();

  return NextResponse.json({ data });
}

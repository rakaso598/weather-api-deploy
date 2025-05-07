import { NextResponse } from "next/server";

const JSON_SERVER_URL = "http://localhost:3001";

export async function POST(request) {
  try {
    const reqBody = await request.json();

    const response = await fetch(`${JSON_SERVER_URL}/weather`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: `json-server 오류: ${response.status}`, error: errorData },
        { status: response.status }
      );
    }

    const newWeatherDataFromJSONServer = await response.json();
    return NextResponse.json(newWeatherDataFromJSONServer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

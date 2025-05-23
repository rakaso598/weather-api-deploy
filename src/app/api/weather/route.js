import { NextResponse } from "next/server";

const JSON_SERVER_URL = "http://localhost:3001";

export async function GET() {
  try {
    const response = await fetch(`${JSON_SERVER_URL}/weather`);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: `json-server 오류: ${response.status}`, error: errorData },
        { status: response.status }
      );
    }

    const weatherDataFromJSONServer = await response.json();
    return NextResponse.json(weatherDataFromJSONServer);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

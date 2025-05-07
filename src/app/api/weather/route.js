import { NextResponse } from "next/server";
import weatherData from "@/data/weather";

export async function GET() {
  return NextResponse.json(weatherData);
}

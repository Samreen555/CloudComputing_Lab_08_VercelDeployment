import { NextRequest, NextResponse } from 'next/server';

// This tells Vercel to run this function on the Edge network
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  // @ts-ignore - geo property exists on Vercel Edge runtime but TypeScript doesn't know
  const geo = request.geo;
  
  return NextResponse.json({
    city: geo?.city || "Unknown",
    country: geo?.country || "Unknown",
    region: geo?.region || "Unknown",
    latitude: geo?.latitude || null,
    longitude: geo?.longitude || null,
    timestamp: new Date().toISOString(),
    note: "This data is only available on Vercel production URL, not localhost",
    environment: process.env.NODE_ENV
  });
}
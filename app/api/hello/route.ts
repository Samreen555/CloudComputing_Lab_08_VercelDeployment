import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: "Hello from Serverless Function!",
    timestamp: new Date().toISOString(),
    status: "success"
  });
}
import { NextRequest, NextResponse } from 'next/server';

const students = [
  { id: "001", name: "Samreen Farhat", grade: "A", email: "samreen@example.com" },
  { id: "002", name: "Zain Javed", grade: "B+", email: "zain@example.com" },
  { id: "003", name: "Rehan Javed", grade: "A-", email: "rehan@example.com" },
  { id: "004", name: "Khawar Javed", grade: "A+", email: "khawar@example.com" }
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const student = students.find(s => s.id === id);
  
  if (!student) {
    return NextResponse.json(
      { error: `Student ${id} not found` },
      { status: 404 }
    );
  }
  
  return NextResponse.json(student);
}
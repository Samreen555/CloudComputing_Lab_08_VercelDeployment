import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add a custom header to all responses
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'Added by Edge Middleware');
  
  // Log the request path (for demo purposes)
  console.log(`Middleware executed for: ${request.nextUrl.pathname}`);
  
  return response;
}

export const config = {
  matcher: '/api/:path*', // Only run on API routes
};
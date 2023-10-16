import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) { 
    if (
      req.nextUrl.pathname === "/" &&
      req.nextauth.token?.role !== "admin"
    ) {
      return new NextResponse("You are not authorized!");
    }
  },
  {
    callbacks: {
      authorized(params) {
        let { token } = params; 
        return !!token
      },
    },
    pages: {
      signIn: '/login',
    },
  }

);

export const config = {
  matcher: [
    '/((?!_next/static|favicon.ico|login).*)',
  ]
};

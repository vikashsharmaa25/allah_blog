import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/signup', '/_next', '/api', '/favicon.ico'];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value || '';

    // Check if the current path is public
    const isPublicPath = publicPaths.some(path =>
        pathname === path || 
        pathname.startsWith(`${path}/`) ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api')
    );

    // If user is logged in and tries to access login/signup, redirect to home
    if (token && (pathname === '/login' || pathname === '/signup')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If it's a public path, allow access
    if (isPublicPath) {
        return NextResponse.next();
    }

    // If not a public path and no token, redirect to login
    if (!token) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('from', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // For all other cases, continue with the request
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};

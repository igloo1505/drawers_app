import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { isAuthenticated } from "./utils/auth";

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
};




export function middleware(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } },
        );
    }
}

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { clearTokens, isAuthenticated } from "./utils/auth";

export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*'],
};



export async function middleware(req: NextRequest) {
    const isAuthed = await isAuthenticated(req)
    if (!isAuthed) {
        let response = NextResponse.redirect(new URL('/', req.url))
        let res = clearTokens(response)
        return res
    }
}

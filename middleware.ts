import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { clearTokens, isAuthenticated, refreshTokens } from "./utils/auth";

const protectedRoutes = [
    '/profile/',
    '/feed/'
]


export async function middleware(req: NextRequest) {
    const isAuthed = await isAuthenticated(req)
    let res = NextResponse.next()
    if (!isAuthed) {
        protectedRoutes.forEach((r) => {
            if (req.nextUrl.pathname.startsWith(r)) {
                let response = NextResponse.redirect(new URL('/', req.url))
                let res = clearTokens(response)
                return res
            }
        })
    }
    if (isAuthed) {
        res = await refreshTokens(req, res)
    }
    return res
}

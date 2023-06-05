import jwt from 'jsonwebtoken'
import type { NextRequest, NextResponse } from 'next/server'


const authTokenPath = 'auth'

const genToken = (userId: string) => {
    return jwt.sign({
        userId: userId
    }, process.env.JWT_SECRET!, { expiresIn: '1h' })
}

const isValidToken = (req: NextRequest, userId: string) => {
    let token = req.cookies.get(authTokenPath)?.value
    if (!token) {
        return false
    }
    let valid = jwt.verify(token, process.env.JWT_SECRET!)
    return valid === userId
}

export const isAuthenticated = (req: NextRequest) => {
    let userId = req.cookies.get('userId')?.value
    let validToken = false
    if (userId) {
        validToken = isValidToken(req, userId)
    }
    return validToken
}

export const setToken = (req: NextRequest, res: NextResponse, userId?: string): NextResponse => {
    let id = req.cookies.get('userId')?.value || userId
    if (!id) return res;
    res.cookies.set('userId', id)
    res.cookies.set('auth', genToken(id))
    return res
}

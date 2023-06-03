import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { LoginUserData } from "../../../../state/types/AuthTypes";
import { prisma } from "../../../../db/db";
import { comparePasswords } from "../../../../utils/serverUtils";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    // middleware
    // .use(async (req, event, next) => {
    //   const start = Date.now();
    //   await next(); // call next in chain
    //   const end = Date.now();
    //   console.log(`Request took ${end - start}ms`);
    // })

    .post(async (req, ctx) => {
        try {
            const json = await req.json()
            const data: LoginUserData = json.user
            const user = await prisma.user.findFirst({
                where: {
                    email: data.email
                }
            })
            if (!user) {
                return NextResponse.json({ success: false });
            }
            const validPassword = await comparePasswords(data.password, user?.password)
            if (!validPassword) {
                return NextResponse.json({ success: false });
            }
            let returnUser = { ...user }
            // @ts-ignore
            delete returnUser.password
            return NextResponse.json({ user: returnUser, success: true });
        } catch {
            return NextResponse.json({ success: false });
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}



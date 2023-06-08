import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "../../../../db/db";
import { Profile } from "@prisma/client";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            const data = await req.json()
            let profileData = { ...data }
            delete profileData?.userName
            const updated = await prisma.user.update({
                where: {
                    username: data.userName
                },
                data: {
                    profile: {
                        upsert: {
                            create: profileData,
                            update: profileData
                        }
                    }
                }
            })
            return NextResponse.json({
                updated: updated,
                success: true
            });
        } catch (err) {
            console.error(err)
            return NextResponse.json({ success: false });
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

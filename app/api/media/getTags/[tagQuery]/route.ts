import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "../../../../../db/db";


interface RequestContext {
    params: {
        tagQuery: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .get(async (req, ctx) => {
        try {
            const query = ctx.params.tagQuery
            const tags = await prisma.tag.findMany({
                where: {
                    value: {
                        contains: query
                    }
                },
                orderBy: {
                    value: "asc"
                }
            })
            return NextResponse.json({ tags: tags, success: true });
        } catch (err) {
            console.log("Error: ", err)
            return NextResponse.json({ success: false });
        }
    })


export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

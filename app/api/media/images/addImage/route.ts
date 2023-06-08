import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter, expressWrapper } from "next-connect";
import { imageMiddleware } from "utils/imageHandler";
import { PageConfig } from "next";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    // @ts-ignore
    .use(expressWrapper(imageMiddleware.any()))

    .post(async (req, ctx) => {
        try {
            const body = await req.json()
            const blob = await req.blob()
            const formData = await req.formData()
            console.log("Body: ", body)
            console.log("formData: ", formData)
            console.log("blob: ", blob)
            return NextResponse.json({});
        } catch {
            return NextResponse.json({ success: false });
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}


import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter, expressWrapper } from "next-connect";
import { multerUpload_middleware } from "../../../utils/imageHandler";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    // middleware
    // @ts-ignore
    .use(expressWrapper(multerUpload_middleware.any()))
    
    .post(async (req, ctx) => {
        try {
            return NextResponse.json({});
        } catch {
            return NextResponse.json({ success: false });
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}


export const config = {
	api: {
		bodyParser: false,
	},
};

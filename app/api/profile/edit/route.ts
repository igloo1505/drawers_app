import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "../../../../db/db";
import { Profile, Tag, TagsOnProfile } from "@prisma/client";

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
            const tags = profileData.tags.map((t: Tag) => ({
                where: {
                    value: t.value
                },
                create: {
                    value: t.value,
                    formattedValue: t.formattedValue
                }
            }))
            const updated = await prisma.user.update({
                where: {
                    username: data.userName
                },
                data: {
                    profile: {
                        connectOrCreate: {
                            create: {
                                ...profileData,
                                tags: {
                                    connectOrCreate: tags
                                },
                            },
                            where: {
                                userName: data.userName
                            }
                        },
                        update: {
                            ...profileData,
                            tags: {
                                connectOrCreate: tags
                            },
                        },
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




                        // upsert: {
                        //     create: {
                        //         ...profileData,
                        //         tags: {
                        //             create: profileData.tags,
                        //             update: profileData.tags
                        //         }
                        //     },
                        //     update: {
                        //         ...profileData,
                        //         tags: {
                        //             create: profileData.tags,
                        //             update: profileData.tags
                        //         }
                        //     }
                        // }

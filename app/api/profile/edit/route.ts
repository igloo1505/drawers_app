import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "../../../../db/db";
import { Tag, Prisma } from "@prisma/client";

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
            const existingTags = await prisma.user.findFirst({
                where: {
                    username: data.userName
                },
                include: {
                    profile: {
                        include: {
                            tags: true
                        }
                    }
                }
            })
            const justValues: string[] = profileData.tags.map((t: Tag) => t.value)
            let removeTags: { value: string }[] = []
            if (existingTags?.profile?.tags) {
                removeTags = existingTags.profile.tags.filter((t: Tag) => justValues.indexOf(t.value) === -1).map((j) => ({ value: j.value }))
            }
            // const query: Prisma.ProfileUpdateOneWithoutUserNestedInput = {
            // }

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
                                connectOrCreate: tags,
                                disconnect: removeTags
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

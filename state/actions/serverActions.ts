import { Profile, Tag, TagsOnProfile } from "@prisma/client"
import { prisma } from "../../db/db"

export const getUser = async (id: string) => {
    const user = await prisma.user.findFirst({
        where: {
            username: id
        }
    })
    if (user) {
        // @ts-ignore
        delete user.password
    }
    return user
}




export interface ProfileRetrievedType extends Profile {
    tags: TagsOnProfile[]
}


export const getProfile = async (id: string): Promise<ProfileRetrievedType> => {
    const profile = await prisma.profile.findFirst({
        where: {
            userName: id
        }
    }) as ProfileRetrievedType
    if (profile) {
        const tags = await prisma.tagsOnProfile.findMany({
            where: {
                profileId: profile.id
            }
        })
        profile.tags = tags
    }
    return profile
}

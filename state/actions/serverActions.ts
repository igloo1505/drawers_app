import { Profile, Tag, TagsOnProfile } from "@prisma/client"
import { prisma } from "../../db/db"
import type { FeedContentType, FeedType } from "../../types/ContentTypes"


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
        },
        include: {
            tags: true
        }
    }) as ProfileRetrievedType
    return profile
}


// TODO: Handle after post functionality
export const getFeed = async (id: string): Promise<FeedType> => {
    return []
}


// TODO: Handle after post functionality
export const getTagsFromQuery = async (query: string, mode: "insensitive" | undefined): Promise<Tag[]> => {
    const tags = await prisma.tag.findMany({
        where: {
            value: {
                contains: query,
                ...(typeof mode !== "undefined" && { mode: mode })
            },
        },
        orderBy: {
            value: "asc"
        }
    })
    return tags
}

export const getByTag = async (tag: string): Promise<FeedContentType[]> => {
    // TODO: Handle after post functionality

    return []
}






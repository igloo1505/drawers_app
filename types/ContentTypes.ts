import { Profile } from "@prisma/client";
import { RetrievedUserData } from "../state/types/AuthTypes";
import { ProfileRetrievedType } from "../state/actions/serverActions";

export type PrivacyType = "PUBLIC" | "PRIVATE" | "FRIENDS-ONLY"

export type CurrencyType = "USD"

interface PriceType {
    value: number
    currency: CurrencyType
}

interface ItemType {
    title: string
    price: string
}


interface VideoType {
    id: string
}

interface ImageType {
    id: string
    privacy: PrivacyType
    datePosted: Date
}

interface Tag {
    value: string
}

interface PostType {
    user: RetrievedUserData
    content: string
    tags?: Tag[]
}

interface ImagePostType extends PostType {
    image: ImageType
}

interface VideoPostType extends PostType {
    video: VideoType
}

interface ItemPostType extends PostType {
    item: ItemType
}


export type FeedContentType = ImagePostType | VideoPostType | ItemPostType


export const getBlankProfile = (id: string): Partial<ProfileRetrievedType> => {
    return {
        userName: id,
        firstName: "",
        lastName: "",
        imageIds: [],
        introduction: "",
        location: "",
        interests: "",
        tags: []
    }
}


export interface AddImageRequest extends FormData {
    image: Blob
    parentId: string
    parentType: "post" | "user" | "item" | "status"
}



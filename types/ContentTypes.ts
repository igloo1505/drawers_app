import { RetrievedUserData } from "../state/types/AuthTypes";
import { ProfileRetrievedType } from "../state/actions/serverActions";

export type PrivacyType = "PUBLIC" | "PRIVATE" | "FRIENDS-ONLY"

export type CurrencyType = "USD"

interface PriceType {
    value: number
    currency: CurrencyType
}


export interface ItemType {
    title: string
    price: string
}


export interface VideoType {
    id: string
}


export interface ImageType {
    id: string
    privacy: PrivacyType
    datePosted: Date
}

export interface Tag {
    value: string
}

export interface PostType {
    user: RetrievedUserData
    content: string
    tags?: Tag[]
}

export interface ImagePostType extends PostType {
    image: ImageType
}

export interface VideoPostType extends PostType {
    video: VideoType
}

export interface ItemPostType extends PostType {
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


export type FeedType = FeedContentType[]




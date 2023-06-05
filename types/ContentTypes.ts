import { RetrievedUserData } from "../state/types/AuthTypes";

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

import { IconType } from "react-icons/lib"

type SeverityType = "secondary" | "success" | "info" | "warning" | "help" | "danger"


export interface AppStatItemType {
    value: number | string
    label: string
    formatValue?: "number" | "dollar" | null | undefined
}


export interface ToastConfigType {
    severity: "success" | "info" | "warn" | "error"
    content: string
    timeout: number | null
    isOpen: boolean
    title: string
}


export type FeaturedLabelCategory = "buyer" | "seller" | "content"


export interface FeatureLabelType {
    label: string
    category: "buyer" | "seller" | "content"
}

export interface HighlightedFeatureType {
    title: string
    body: string
    iconClass?: string | null | undefined
}

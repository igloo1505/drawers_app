import { IconType } from "react-icons/lib"

type SeverityType = "secondary" | "success" | "info" | "warning" | "help" | "danger"


export interface AppStatItemType {
    icon: IconType
    value: number | string
    label: string
    formatLabel?: (val: string) => string
    formatValue?: (val: string | number) => string
}


export interface ToastConfigType {
    severity: "success" | "info" | "warn" | "error"
    content: string
    timeout: number | null
    isOpen: boolean
    title: string
}

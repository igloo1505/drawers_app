import { IconType } from "react-icons/lib"

type SeverityType = "secondary" | "success" | "info" | "warning" | "help" | "danger"


export interface AppStats {
    items: AppStatItem[]
}

export interface AppStatItem {
    icon: IconType
    value: number | string
    label: string
    formatLabel?: (val: string) => string
    formatValue?: (val: string | number) => string
}


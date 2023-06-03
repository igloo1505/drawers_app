import { ToastConfigType } from "../../types/UITypes"
import appData, { AppDataType } from "./appData"

type initialUiStateType = {
    darkMode: boolean
    lightId: string | undefined | null
    darkId: string | undefined | null
    hasDarkMode: boolean
    appData: AppDataType
    toast: ToastConfigType
    drawerOpen: boolean
    modals: {
        termsOfService: boolean
        privacy: boolean
    }
}

let initialAppData = appData
if (typeof window !== "undefined") {
    let data = window.localStorage.getItem("UIAppData")
    if (data) {
        initialAppData = JSON.parse(data)
    }
}

const initialUiState: initialUiStateType = {
    darkMode: true,
    hasDarkMode: false,
    lightId: "",
    darkId: "",
    appData: initialAppData as AppDataType,
    toast: {
        severity: "info",
        timeout: 0,
        isOpen: false,
        content: "",
        title: ""
    },
    drawerOpen: false,
    modals: {
        termsOfService: false,
        privacy: false
    }
}


export default initialUiState

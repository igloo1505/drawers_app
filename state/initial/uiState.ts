import { ToastConfigType } from "../../types/UITypes"
import appData, { AppDataType } from "./appData"

type initialUiStateType = {
    darkMode: boolean,
    appData: AppDataType
    toast: ToastConfigType
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
    // appData: {
    //     ...appData,
    //     appStats: {
    //         ...appData.appStats,
    //         items: appData.appStats.items.map((s) => )
    //     }
    // }
    appData: initialAppData,
    toast: {
        severity: "info",
        timeout: 0,
        isOpen: false,
        content: "",
        title: ""
    }
}


export default initialUiState

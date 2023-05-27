import appData, { AppDataType } from "../initial/appData"
import { availableThemes } from "../initial/themeTesting"
import store from "../store"


export const disableAllThemes = () => {
    availableThemes.forEach((t) => {
        t.deactivateSelf()
        t.deactivateSelf()
    })
}


// export const getAppData = () => {
//     let state = store.getState()
//     if (typeof window === "undefined") {
//         return appData
//     }
//     if (state.UI.appData) {
//         return state.UI.appData
//     }
//     return appData
// }

export const setOriginalAppData = () => {
    if (typeof window === "undefined") return;
    let data = window.localStorage.getItem("UIAppData")
    if (data) {
        store.dispatch({
            type: "SET_UI_APP_DATA",
            payload: data
        })
    }
}


export const handleAppDataChange = (value: AppDataType) => {
    // if (typeof window === "undefined") return;
    if (window) {
        window.localStorage.setItem("UIAppData", JSON.stringify(value))
    }
    store.dispatch({
        type: "SET_UI_APP_DATA",
        payload: value
    })
}


export const resetAppData = () => {
    handleAppDataChange(appData as AppDataType)
}


export const showContentManipulationModal = () => {
    let em = document.getElementById("content-manipulation-modal")
    if (!em) return;
    em.style.transform = "translate(-50%, -50%)"
    em.style.opacity = "1"
}

export const hideContentManipulationModal = () => {
    let em = document.getElementById("content-manipulation-modal")
    if (!em) return;
    em.style.transform = "translate(-50%, -100vh)"
    em.style.opacity = "0"
    store.dispatch({
        type: "SET_CHANGE_MODAL_ACTIVE",
        payload: {
            label: "",
            value: "",
            submitChange: null,
            isOpen: false,
            name: ""
        }

    })
}

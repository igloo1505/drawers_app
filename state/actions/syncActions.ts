import store from "../store"
// import * as Types from '../types/reduxTypes'
import { setActiveTheme, toggleDarkMode as tdm } from "../slices/ui"
import { setActiveTheme as setActiveThemeDevelopment } from "../slices/testing"
import { setAuthenticated as setauth } from "../slices/auth"
export const setAuthenticated = (authenticated: boolean) => {
    store.dispatch(setauth(authenticated))
}

export const toggleDarkMode = () => {
    tdm()
}

export const toggleDarkModeProduction = () => {
    const state = store.getState().UI
    store.dispatch(tdm())
    // store.dispatch(setActiveTheme({
    //     id: state.darkMode ? state.lightId : state.darkId,
    //     variant: state.darkMode ? "light" : "dark",
    //     lightId: state.lightId,
    //     darkId: state.darkId
    // }))
    // store.dispatch(setActiveThemeDevelopment({
    //     id: state.darkMode ? state.lightId : state.darkId,
    //     variant: state.darkMode ? "light" : "dark",
    //     lightId: state.lightId,
    //     darkId: state.darkId
    // }))
}


export const toggleDrawer = (val?: boolean) => {
    typeof val !== "undefined" ? toggleDrawer(val) : toggleDrawer()
}


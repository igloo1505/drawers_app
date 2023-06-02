import store from "../store"
// import * as Types from '../types/reduxTypes'


export const setAuthenticated = (authenticated: boolean) => {
    store.dispatch({
        type: "SET_AUTHENTICATED",
        payload: authenticated
    })
}

export const toggleDarkMode = () => {
    // TODO: Still needs to be handled appropriately. Look into ways to load alternative css from the server in a lazy manner as to not slow down initial render times.
    store.dispatch({
        type: "TOGGLE_DARK_MODE",
    })
}

export const toggleDarkModeProduction = () => {
    const state = store.getState().UI
    store.dispatch({
        type: "SET_ACTIVE_THEME",
        payload: {
            id: state.darkMode ? state.lightId : state.darkId,
            variant: state.darkMode ? "light" : "dark",
            lightId: state.lightId,
            darkId: state.darkId
        }
    })
}


export const toggleDrawer = (val?: boolean) => {
    store.dispatch({
        type: "TOGGLE_DRAWER",
        ...(val && { payload: val })
    })
}

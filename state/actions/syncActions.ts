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

import store from "../store"
// import * as Types from '../types/reduxTypes'


export const setAuthenticated = (authenticated: boolean) => {
    store.dispatch({
        type: "SET_AUTHENTICATED",
        payload: authenticated
    })
}

import axios from 'axios'
import { defaultAxiosConfig } from '../types/NetworkTypes'
// import { NETWORK_ERROR } from '../types/reduxTypes'
import store from '../store'
import { LoginUserData, NewUserData } from '../types/AuthTypes'


export const createNewUser = async (user: NewUserData) => {
    console.log("Sending user", user)
    const res = await axios.post("/api/users/createUser", { user }, defaultAxiosConfig)
    if (res.data?.success) {
        store.dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.newUser
        })
    }
    console.log("Res", res)
    return res.data?.success
}


export const loginUser = async (data: LoginUserData) => {
    const res = await axios.post("/api/users/login", { user: data }, defaultAxiosConfig)
    if (res.data?.success) {
        store.dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.user
        })
    }
    return res.data?.success
}


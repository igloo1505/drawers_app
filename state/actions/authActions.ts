import axios from 'axios'
import { defaultAxiosConfig } from '../types/NetworkTypes'
// import { NETWORK_ERROR } from '../types/reduxTypes'
import store from '../store'
import { LoginUserData, NewUserData } from '../types/AuthTypes'
import { loginSuccess } from '../slices/auth'


export const createNewUser = async (user: NewUserData) => {
    const res = await axios.post("/api/users/createUser", { user }, defaultAxiosConfig)
    if (res.data?.success) {
        store.dispatch(
            loginSuccess(res.data.newUser)
        )
    }
    return res.data?.success
}


export const loginUser = async (data: LoginUserData) => {
    const res = await axios.post("/api/users/login", { user: data }, defaultAxiosConfig)
    if (res.data?.success) {
        store.dispatch(
            loginSuccess(res.data.user)
        )
    }
    return res.data?.success
}


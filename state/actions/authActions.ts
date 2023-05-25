import axios from 'axios'
import { defaultAxiosConfig } from '../types/NetworkTypes'
import { NETWORK_ERROR } from '../types/reduxTypes'
import store from '../store'


export const loginUser = async (data: LoginUserData) => {
    window.alert("Need to handle user authentication still")
    try {
        const res = await axios.post("/api/authenticateUser", data, defaultAxiosConfig)
        console.log("Res:", res)
    } catch {
        store.dispatch({
            type: "NETWORK_ERROR"
        })
    }

}

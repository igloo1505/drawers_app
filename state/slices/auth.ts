import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initial/initialState";
import type { RetrievedUserData } from "../types/AuthTypes";
import { InitialAuthStateType } from "../initial/authState";

const slice = createSlice({
    name: "auth",
    initialState: initialState.auth as typeof initialState['auth'],
    reducers: {
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.authenticated = action.payload
        },
        loginSuccess(state, action: PayloadAction<RetrievedUserData>) {
            state.user = action.payload,
                state.authenticated = true
        },
        logout(state) {
            state = initialState.auth
        }
    }
})

export const { setAuthenticated, loginSuccess, logout } = slice.actions
export default slice.reducer

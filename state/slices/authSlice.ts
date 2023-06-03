import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from '../initial/authState'
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import * as Types from '../types/reduxTypes'
import { RetrievedUserData } from "../types/AuthTypes";

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<RetrievedUserData>) {
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        },
        logout(state) {
            return {
                ...initialState
            }
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

// export const selectAuthState = (state: RootState) => state.auth.authState;

export default authSlice.reducer;

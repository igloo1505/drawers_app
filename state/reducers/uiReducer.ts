import * as Types from "../types/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import initState from "../initial/initialState";
// import ToastConfig, { toastConfig } from "../types/ToastConfig";
const initialState = initState.UI;

const UIReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        "TOGGLE_DARK_MODE",
        (state: typeof initialState, action: Types.TOGGLE_DARK_MODE) => {
            return {
                ...state,
                darkMode: !state.darkMode
            };
        }
    );
    builder.addCase(
        "SET_ACTIVE_THEME",
        (state: typeof initialState, action: Types.SET_ACTIVE_THEME) => {
            console.log("hasDarkMode:", Boolean(action.payload.darkId && action.payload.lightId), action.payload.darkId, action.payload.lightId)
            return {
                ...state,
                darkMode: action.payload.variant === "dark",
                lightId: action.payload.lightId,
                darkId: action.payload.darkId,
                hasDarkMode: Boolean(action.payload.darkId && action.payload.lightId),
            };
        }
    );
    builder.addCase(
        "SET_UI_APP_DATA",
        (state: typeof initialState, action: Types.SET_UI_APP_DATA) => {
            return {
                ...state,
                appData: action.payload
            };
        }
    );
    builder.addCase(
        "SHOW_TOAST",
        (state: typeof initialState, action: Types.SHOW_TOAST) => {
            return {
                ...state,
                toast: action.payload
            };
        }
    );
});

export default UIReducer;

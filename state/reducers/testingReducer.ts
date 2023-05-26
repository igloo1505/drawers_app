import * as Types from "../types/reduxTypes";
import { createReducer } from "@reduxjs/toolkit";
import initState from "../initial/initialState";
const initialState = initState.development;

const DevReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        "SET_ACTIVE_THEME",
        (state: typeof initialState, action: Types.SET_ACTIVE_THEME) => {
            return {
                ...state,
                active_theme: action.payload.id,
                theme_variant: action.payload.variant
            };
        }
    );
});

export default DevReducer;

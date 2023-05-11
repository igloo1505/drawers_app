import * as Types from "../types/reduxTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import initState from "../initial/initialState";
// import ToastConfig, { toastConfig } from "../types/ToastConfig";
const initialState = initState.auth;

const AuthReducer = createReducer(initialState, (builder) => {
	builder.addCase(
		"SET_AUTHENTICATED",
		(state: typeof initialState, action: Types.SET_AUTHENTICATED) => {
			return {
				...state,
                authenticated: action.payload
			};
		}
	);
});

export default AuthReducer;

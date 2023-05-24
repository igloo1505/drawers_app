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
});

export default UIReducer;
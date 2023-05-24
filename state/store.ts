import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authReducer";
import UIReducer from "./reducers/uiReducer";
import initialState from "./initial/initialState";



const store = configureStore({
	reducer: {
		auth: AuthReducer,
        ui: UIReducer
	},
	devTools: process.env.NODE_ENV !== "production" || true,
	preloadedState: initialState,
});

declare global {
	interface Window {
		store: typeof store;
	}
}

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
	window.store = store;
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

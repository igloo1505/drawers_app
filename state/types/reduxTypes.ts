export type SET_AUTHENTICATED = { type: "SET_AUTHENTICATED"; payload: boolean };



// SECTION: Ui Stuff
export type TOGGLE_DARK_MODE = { type: "TOGGLE_DARK_MODE" };



// SECTION: Error Stuff
export type NETWORK_ERROR = { type: "NETWORK_ERROR" }




// SECTION: Testing and Development Only

export type SET_ACTIVE_THEME = {
    type: "SET_ACTIVE_THEME", payload: {
        id: string,
        variant: "light" | "dark"
    }
}

"use client"
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import store, { RootState } from '../../state/store';
import { availableThemes } from '../../state/initial/themeTesting';
import { disableAllThemes } from '../../state/actions/developmentActions';

const connector = connect((state: RootState, props: any) => ({
    activeTheme: state.development.active_theme,
    props: props
}))

interface ThemeClientSetterProps {
    activeTheme: string
}

const ThemeClientSetter = connector(({ activeTheme }: ThemeClientSetterProps) => {
    const [isInitial, setIsInitial] = useState(true)
    const getCurrentTheme = () => {
        if (typeof window !== "undefined") {
            return window.localStorage.getItem("currentTheme") || activeTheme
        }
        return activeTheme
    }
    useEffect(() => {
        let curTheme = getCurrentTheme()
        availableThemes.forEach((theme) => {
            let ids = {
                light: theme.lightId(),
                dark: theme.darkId()
            }
            if (isInitial && theme.original && curTheme === "") {
                if (theme.original === "light") {
                    store.dispatch({
                        type: "SET_ACTIVE_THEME",
                        payload: { id: ids.light, variant: "light" }
                    })
                    return setIsInitial(false)
                }
                if (theme.original === "dark") {
                    store.dispatch({
                        type: "SET_ACTIVE_THEME",
                        payload: { id: ids.dark, variant: "dark" }
                    })
                    return setIsInitial(false)
                }
            }
            if (curTheme === ids.light) {
                disableAllThemes()
                if (activeTheme !== "") {
                    theme.light()
                }
                if (activeTheme === "") {
                    store.dispatch({
                        type: "SET_ACTIVE_THEME",
                        payload: { id: ids.light, variant: "light" }
                    })
                }
            }
            if (curTheme === ids.dark) {
                disableAllThemes()
                if (activeTheme !== "") {
                    theme.dark()
                }
                if (activeTheme === "") {
                    store.dispatch({
                        type: "SET_ACTIVE_THEME",
                        payload: { id: ids.dark, variant: "dark" }
                    })
                }
            }
        })
        if (isInitial) {
            setIsInitial(false)
        }
    }, [activeTheme])

    return (
        <div>

        </div>
    )
})



export default ThemeClientSetter;

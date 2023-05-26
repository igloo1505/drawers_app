"use client"
import React, { MouseEventHandler, useState, useEffect } from 'react'
import { ThemeType, availableThemes } from '../../state/initial/themeTesting';
import { Card } from 'primereact/card';
import Button from '../io/Button';
import store, { RootState } from '../../state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    active_theme: state.development.active_theme,
    props: props
}))



interface ThemeSectionProps {

}

const ActiveButton = ({ label }: { label: string }) => {
    return <Button label={label} disabled outlined raised />
}

const InactiveButton = ({ label, onClick }: { label: string, onClick: MouseEventHandler }) => {
    return <Button label={label} onClick={onClick} />
}

const ThemeItem = connector(({ theme, active_theme }: { theme: ThemeType, active_theme: string }) => {
    const [isInitial, setIsInitial] = useState(true)
    const ids = {
        light: theme.lightId(),
        dark: theme.darkId()
    }
    useEffect(() => {
        let curTheme = active_theme
        if (isInitial && theme.original) {
            if (theme.original === "light") {
                /* debugger */
                store.dispatch({
                    type: "SET_ACTIVE_THEME",
                    payload: { id: ids.light, variant: "light" }
                })
            }
            if (theme.original === "dark") {
                /* debugger */
                store.dispatch({
                    type: "SET_ACTIVE_THEME",
                    payload: { id: ids.dark, variant: "dark" }
                })
            }
        }
        if (!isInitial) {
            /* debugger */
            if (curTheme === ids.light) {
                debugger
                theme.light()
            }
            if (curTheme === ids.dark) {
                debugger
                theme.dark()
            }
        }
        if (isInitial) {
            setIsInitial(false)
        }
    }, [active_theme])

    const setLight = () => {
        debugger
        theme.deactivate(active_theme)
        store.dispatch({
            type: "SET_ACTIVE_THEME",
            payload: { id: ids.light, variant: "light" }
        })
    }
    const setDark = () => {
        debugger
        theme.deactivate(active_theme)
        store.dispatch({
            type: "SET_ACTIVE_THEME",
            payload: { id: ids.dark, variant: "dark" }
        })
    }
    console.log("Has Dark Theme:", theme.label, theme.hasDarkTheme)
    return (
        <Card className={'flex flex-col justify-start items-start w-full testing-theme-card'} title={theme.label}>
            <div className={'w-full flex flex-row justify-end items-end gap-4'}>
                {ids.light === active_theme ? <ActiveButton label={theme.hasDarkTheme ? "Light" : "Toggle"} /> : <InactiveButton onClick={setLight} label={theme.hasDarkTheme ? "Light" : "Toggle"} />}
                {theme.hasDarkTheme && (ids.dark === active_theme ? <ActiveButton label="Dark" /> : <InactiveButton onClick={setDark} label="Dark" />)}
            </div>
        </Card>
    )
})

const ThemeSection = (props: ThemeSectionProps) => {
    return (
        <div className={'w-full'}>
            <div className={'grid gap-2'} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
            }}>
                {availableThemes.map((t, i) => {
                    return <ThemeItem theme={t} key={`theme-item-${i}`} />
                })}
            </div>
        </div>
    )
}



export default ThemeSection;

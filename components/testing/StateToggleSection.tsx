import React, { useState, useEffect, MouseEventHandler } from 'react'
import { ToggleButtonChangeEvent } from 'primereact/togglebutton';
import styles from '../../styles/testing.module.css'
import ToggleButton from '../../components/ui/ToggleButton'
import { setAuthenticated, toggleDarkMode } from '../../state/actions/syncActions';
import { availableThemes } from '../../state/initial/themeTesting';
import store from '../../state/store';
import Button from '../io/Button';


interface StateToggleSectionProps {
    darkMode: boolean
    authenticated: boolean
    activeTheme: string
}



type TestBooleanItemProps = {
    label: string,
    onLabel: string,
    offLabel: string,
    disabled: boolean
    onClick: MouseEventHandler,
    on: boolean
}

const TestBooleanItem = (props: TestBooleanItemProps) => {
    return (
        <div className={styles.buttonContentContainer}>
            <div className={styles.buttonContainerText}>{props.label}</div>
            <div className={styles.buttonContainerBtn}>
                <Button label={props.on ? props.onLabel : props.offLabel} onClick={props.onClick} disabled={props.disabled || false} />
            </div>
        </div>
    )
}


const StateToggleSection = ({ authenticated, darkMode, activeTheme }: StateToggleSectionProps) => {
    const [allowDarkToggle, setAllowDarkToggle] = useState(false)

    const getCurrentTheme = () => {
        const curTheme = availableThemes.filter((t) => Boolean(activeTheme === t.lightId() || activeTheme === t.darkId()))
        if (!curTheme || curTheme.length === 0) return false;
        return curTheme[0]
    }

    useEffect(() => {
        const cur = getCurrentTheme()
        if (!cur) {
            return setAllowDarkToggle(false)
        }
        setAllowDarkToggle(cur.hasDarkTheme)
    }, [activeTheme])

    const toggleDarkMode = () => {
        let cur = getCurrentTheme()
        if (!cur) return;
        if (activeTheme === cur.lightId()) {
            cur.deactivate(cur.lightId())
            cur.dark()
            store.dispatch({
                type: "SET_ACTIVE_THEME",
                payload: { id: cur.darkId(), variant: "dark" }
            })
        }
        if (activeTheme === cur.darkId()) {
            cur.deactivate(cur.darkId())
            cur.light()
            store.dispatch({
                type: "SET_ACTIVE_THEME",
                payload: { id: cur.lightId(), variant: "light" }
            })
        }
    }
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col justify-center items-center w-full'}>
                <div className={styles.testingTitle}>
                    Testing utilities
                </div>
                <div className={styles.testingSubtitle}>
                    This is just for easily and quickly switching states while in development. <br /> This won&apos;t make it into the public app. <br /> All of these are working under the hood, but not all of them are implemented yet.
                </div>
            </div>
            <div className={'grid'} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
            }}>
                <TestBooleanItem label={"Toggle User's logged in status:"}
                    onLabel="Authenticated"
                    offLabel="Un-Authenticated"
                    disabled={false}
                    on={authenticated}
                    onClick={() => setAuthenticated(!authenticated)}
                />
                <TestBooleanItem
                    label={"Dark Mode"}
                    onLabel={"Dark Mode"}
                    offLabel={"Light Mode"}
                    disabled={!allowDarkToggle}
                    on={darkMode}
                    onClick={toggleDarkMode}
                />
            </div>
        </div>
    )
}



export default StateToggleSection;

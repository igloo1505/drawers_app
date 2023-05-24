import type { NextPage } from 'next'
import React from 'react'
import ToggleButton from '../components/app/ToggleButton'
import { connect } from 'react-redux';
import { RootState } from '../state/store';
import { setAuthenticated, toggleDarkMode } from '../state/actions/syncActions';
import styles from '../styles/testing.module.css'
import { ToggleButtonChangeEvent } from 'primereact/togglebutton';

const connector = connect((state: RootState, props: any) => ({
    auth: state.auth,
    ui: state.ui,
    props: props
}))

type TestBooleanItemProps = {
    label: string,
    buttonProps: {
        onLabel: string,
        offLabel: string,
        onIcon: string,
        offIcon: string,
        checked: boolean,
        onChange: (e: ToggleButtonChangeEvent) => void
    }
}

const TestBooleanItem = (props: TestBooleanItemProps) => {
    return (
        <div className={styles.buttonContentContainer}>
            <div className={styles.buttonContainerText}>{props.label}</div>
            <div className={styles.buttonContainerBtn}>
                <ToggleButton {...props.buttonProps} />
            </div>
        </div>
    )
}


const Testing: NextPage = connector(({ auth: { authenticated }, ui: { darkMode } }) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.testingTitle}>
                Testing utilities
            </div>
            <div className={styles.testingSubtitle}>
                This is just for easily and quickly switching states while in development. <br /> This won&apos;t make it into the public app.
            </div>
            <TestBooleanItem label={"Toggle User's logged in status:"} buttonProps={{
                onLabel: "Authenticated",
                offLabel: "Un-Authenticated",
                onIcon: "pi pi-check",
                offIcon: "pi pi-times",
                checked: authenticated,
                onChange: (e: ToggleButtonChangeEvent) => setAuthenticated(e.value)
            }} />
            <TestBooleanItem label={"Dark Mode"} buttonProps={{
                onLabel: "Dark Mode",
                offLabel: "Light Mode",
                onIcon: "pi pi-check",
                offIcon: "pi pi-times",
                checked: darkMode,
                onChange: () => toggleDarkMode()
            }} />
        </div>
    )
})

export default Testing

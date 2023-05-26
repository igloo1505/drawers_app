
"use client"
import type { NextPage } from 'next'
import React from 'react'
import ToggleButton from '../../../components/ui/ToggleButton'
import { connect } from 'react-redux';
import { RootState } from '../../../state/store';
import { setAuthenticated, toggleDarkMode } from '../../../state/actions/syncActions';
import styles from '../../../styles/testing.module.css'
import { ToggleButtonChangeEvent } from 'primereact/togglebutton';
import DemoUISection from '../../../components/testing/UISection';
import { Divider } from 'primereact/divider';
import DividerWithText from '../../../components/ui/DividerWithText';
import ThemeSection from '../../../components/testing/ThemesSection';
import StateToggleSection from '../../../components/testing/StateToggleSection';

const connector = connect((state: RootState, props: any) => ({
    auth: state.auth,
    ui: state.ui,
    active_theme: state.development.active_theme,
    props: props
}))


const DivideSection = ({ label }: { label: string }) => {
    return (
        <div className={'w-full mt-6'}>
            <DividerWithText>
                <div>{label}</div>
            </DividerWithText>
        </div>
    )
}


const Testing: NextPage = connector(({ auth: { authenticated }, ui: { darkMode }, active_theme }) => {
    return (
        <div className={styles.pageWrapper}>
            <StateToggleSection authenticated={authenticated} darkMode={darkMode} activeTheme={active_theme} />
            <DivideSection label="Themes to experiment with" />
            <ThemeSection />
            <DivideSection label="UI Stuff" />
            <DemoUISection />
        </div>
    )
})

export default Testing

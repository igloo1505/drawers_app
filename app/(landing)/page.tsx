"use client"
import React from 'react'
import type { NextPage } from 'next'
import LandingDevSection from '../../components/testing/LandingDevSection';
import AppStatsLandingPanel from '../../components/landing/appStatsPanel/AppStatsLandingPanel';
/* import appData from '../../state/initial/appData'; */
import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { AppDataType } from '../../state/initial/appData';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    props: props
}))

const HomePage: NextPage = connector(({ appData }: { appData: AppDataType }) => {
    return (
        <div>
            <AppStatsLandingPanel appStats={appData.appStats} />
            <LandingDevSection />
        </div>
    )
})


export default HomePage;
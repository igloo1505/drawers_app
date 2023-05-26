import React from 'react'
import type { NextPage } from 'next'
import LandingDevSection from '../../components/testing/LandingDevSection';
import AppStatsLandingPanel from '../../components/landing/appStatsPanel/AppStatsLandingPanel';
import { appStats } from '../../state/initial/appData';


const HomePage: NextPage = () => {
    return (
        <div>
            <AppStatsLandingPanel appStats={appStats}/>
            <LandingDevSection />
        </div>
    )
}



export default HomePage;

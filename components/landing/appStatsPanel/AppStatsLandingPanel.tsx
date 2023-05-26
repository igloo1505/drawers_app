import React from 'react'
import AppStatItem from './AppStatItem'
import { AppStats } from '../../../types/UITypes'



interface AppStatsLandingPanelProps {
    appStats: AppStats
}

const AppStatsLandingPanel = ({ appStats }: AppStatsLandingPanelProps) => {
    return (
        <div className={'mb-4 mt-4 flex flex-row justify-center flex-wrap gap-4 xl:grid xl:grid-cols-4 xl:gap-2 xl:place-items-center'}>
            {appStats.items.map((stat, i) => {
                return (
                    <AppStatItem item={stat} key={`app-stat-item-${i}`} />
                )
            })}
        </div>
    )
}



export default AppStatsLandingPanel;

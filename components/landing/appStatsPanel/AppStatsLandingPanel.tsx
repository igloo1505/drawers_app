import React from 'react'
import AppStatItem from './AppStatItem'
import { AppStatItemType } from '../../../types/UITypes'



interface AppStatsLandingPanelProps {
    appStats: {
        items: AppStatItemType[]
    }
}


const AppStatsLandingPanel = ({ appStats }: AppStatsLandingPanelProps) => {
    return (
        <div className={'pb-4 pt-0 px-4 flex flex-row justify-center flex-wrap xl:grid xl:grid-cols-4 xl:gap-0 xl:place-items-center'}>
            {appStats.items.map((stat, i) => {
                return (
                    <AppStatItem item={stat} idx={i} key={`app-stat-item-${i}`} />
                )
            })}
        </div>
    )
}



export default AppStatsLandingPanel;

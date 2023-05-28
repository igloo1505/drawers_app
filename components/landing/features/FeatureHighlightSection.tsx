import React from 'react'
import { HighlightedFeatureType } from '../../../types/UITypes';
import FeatureHighlightCard from './FeatureHighlightCard';
import { FaPlayCircle, FaUnlock, FaCoins } from 'react-icons/fa'
import { AppDataType } from '../../../state/initial/appData';


interface FeatureHighlightSectionProps {
    highlightedFeatures: HighlightedFeatureType[]
    featuredSectionDetails: AppDataType['landing']['highlightedFeatureSection']
}

const iconMap = {
    FaPlayCircle: FaPlayCircle,
    FaUnlock: FaUnlock,
    FaCoins: FaCoins
}

const FeatureHighlightSection = ({ highlightedFeatures, featuredSectionDetails }: FeatureHighlightSectionProps) => {
    return (
        <div className={'mt-12'}>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <div className={'text-4xl font-bold'}>{featuredSectionDetails.title}</div>
                <div className={'text-xl text-center mb-4'} style={{
                    maxWidth: "min(max(85vw, calc(100vw - 4rem)), 768px)"
                }}>{featuredSectionDetails.subtitle}</div>
            </div>
            <div className={'w-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 pt-14 pb-8 px-6 bg-[--highlight-bg] responsive-row-gap-highlighted mt-6'} >
                {highlightedFeatures.map((f, i) => {
                    return <FeatureHighlightCard item={f} key={`highlight-feature-card-${i}`} Icon={f.iconClass ? iconMap[f.iconClass as keyof typeof iconMap] : iconMap.FaCoins} />
                })}
            </div>
        </div>
    )
}



export default FeatureHighlightSection;

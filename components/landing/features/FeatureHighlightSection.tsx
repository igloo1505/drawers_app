import React from 'react'
import { HighlightedFeatureType } from '../../../types/UITypes';
import FeatureHighlightCard from './FeatureHighlightCard';
import { FaPlayCircle, FaUnlock, FaCoins } from 'react-icons/fa'


interface FeatureHighlightSectionProps {
    highlightedFeatures: HighlightedFeatureType[]
}

const iconMap = {
    FaPlayCircle: FaPlayCircle,
    FaUnlock: FaUnlock,
    FaCoins: FaCoins
}

const FeatureHighlightSection = ({ highlightedFeatures }: FeatureHighlightSectionProps) => {
    return (
        <div className={'w-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 mt-16'}>
            {highlightedFeatures.map((f, i) => {
                return <FeatureHighlightCard item={f} key={`highlight-feature-card-${i}`} Icon={f.iconClass ? iconMap[f.iconClass as keyof typeof iconMap] : iconMap.FaCoins} />
            })}
        </div>
    )
}



export default FeatureHighlightSection;

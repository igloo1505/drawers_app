import React from 'react'
import { AppDataType, groupFeatureLabels } from '../../../state/initial/appData';
import { FeatureLabelType, FeaturedLabelCategory } from '../../../types/UITypes';
import FeaturesCategory from './FeaturesCategory';



interface FeaturesSectionProps {
    appData: AppDataType
}

const FeaturesSection = ({ appData }: FeaturesSectionProps) => {
    const grouped = groupFeatureLabels(appData.featureLabels)
    return (
        <div className={'w-full flex flex-col justify-center items-center gap-4 sm:gap-1 sm:grid sm:grid-cols-3 sm:place-items-center mt-6 sm:grid-rows-1'}>
            {Object.keys(grouped).map((group, i) => {
                return appData.featureLabels ? <FeaturesCategory category={group as FeaturedLabelCategory} features={grouped[group as FeaturedLabelCategory] as FeatureLabelType[]} /> : <div></div>
            })}
        </div>
    )
}



export default FeaturesSection;

import React from 'react'
import { FeatureLabelType, FeaturedLabelCategory } from '../../../types/UITypes';
import { capitalizeWord } from '../../../utils/formatting';
import LeftBottomUnderlinedText from '../../ui/LeftBottomUnderlinedText';



interface FeaturesCategoryProps {
    category: FeaturedLabelCategory
    features: FeatureLabelType[]
}


const FeatureDisplayItem = ({ item }: { item: FeatureLabelType }) => {
    return (
        <div className={'w-full lg:text-lg flex flex-row justify-start items-center gap-2 feature-item-hover-parent'}>
            <i className={'pi pi-check'}></i>
            <div>{item.label}</div>
        </div>
    )
}

const FeaturesCategory = ({ category, features }: FeaturesCategoryProps) => {
    return (
        <div className={'h-full w-full mt-4 sm:mt-0 flex flex-col justify-start items-center'}>
            <LeftBottomUnderlinedText text={capitalizeWord(category)} textClasses="text-4xl sm:text-2xl lg:text-3xl xl:text-4xl mb-3 " />
            <div className={'grid grid-cols-1 max-w-full gap-1'}>
                {
                    features.map((f, i) => {
                        return <FeatureDisplayItem item={f} key={`feature-item-${f.category}-${i}`} />
                    })
                }
            </div>
        </div>
    )
}



export default FeaturesCategory;

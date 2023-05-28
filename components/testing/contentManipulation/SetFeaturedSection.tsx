import React from 'react'
import { AppDataType, groupFeatureLabels } from '../../../state/initial/appData';
import { FeatureLabelType, FeaturedLabelCategory } from '../../../types/UITypes';
import FeaturedItemManipulation from './FeaturedItem';
import store from '../../../state/store';
import Button from '../../io/Button';



interface SetFeaturedContentSectionProps {
    appData: AppDataType
}


const FeaturedGroup = ({ label, group, handleChange, category, removeItem }: { label: string, group: FeatureLabelType[], handleChange: (data: FeatureLabelType, idx: number, category: FeaturedLabelCategory) => void, category: FeaturedLabelCategory, removeItem: (cat: FeaturedLabelCategory, idx: number) => void }) => {
    const addItem = () => {
        store.dispatch({
            type: "SET_CHANGE_MODAL_ACTIVE",
            payload: {
                label: "Add a feature",
                value: "",
                name: "addFeature",
                isAddFeatureLabel: category,
                isOpen: true
            }
        })
    }
    return (
        <div className={'my-6'}>
            <div className={'w-full text-2xl'}>{`${label.charAt(0).toUpperCase()}${label.slice(1, label.length)}`}</div>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-2'}>{
                group.map((fl, i) => {
                    return <FeaturedItemManipulation removeItem={removeItem} category={category} item={fl} idx={i} key={`featured-item-${i}`} handleChange={handleChange} />
                })
            }</div>

            <div className={'my-4 w-full flex justify-center items-center'}>
                <Button icon="pi pi-plus" onClick={addItem} />
            </div>
        </div>
    )
}

const SetFeaturedContentSection = ({ appData }: SetFeaturedContentSectionProps) => {
    const grouped = groupFeatureLabels(appData.featureLabels)
    const handleChange = (data: FeatureLabelType, idx: number, category: FeaturedLabelCategory) => {
        let newFeatureds: FeatureLabelType[] = []
        Object.keys(grouped).forEach((group) => {
            let thisGroup = grouped[group as FeaturedLabelCategory]
            if (thisGroup) {
                if (group !== category) {
                    newFeatureds = [...newFeatureds, ...thisGroup]
                }
                if (group === category) {
                    newFeatureds = [...newFeatureds, ...thisGroup.map((g, i) => i === idx ? data : g)]
                }
            }
        })
        store.dispatch({
            type: "SET_UI_APP_DATA",
            payload: {
                ...appData,
                featureLabels: newFeatureds
            }
        })
    }
    const removeItem = (category: FeaturedLabelCategory, idx: number) => {
        console.log("In here", category, idx)
        let newFeatureds: FeatureLabelType[] = []
        Object.keys(grouped).forEach((group) => {
            let thisGroup = grouped[group as FeaturedLabelCategory]
            console.log(group, group === category, thisGroup)
            if (thisGroup) {
                if (group !== category) {
                    newFeatureds = [...newFeatureds, ...thisGroup]
                }
                if (group === category) {
                    console.log("In here...")
                    let filtered = thisGroup.filter((item, i) => i !== idx)
                    console.log(grouped[category].length, filtered.length)
                    newFeatureds = [...newFeatureds, ...filtered]
                }
            }
        })
        store.dispatch({
            type: "SET_UI_APP_DATA",
            payload: {
                ...appData,
                featureLabels: newFeatureds
            }
        })
    }
    return (
        <div className={'my-4'}>
            {grouped && (Object.keys(grouped).map((k) => <FeaturedGroup removeItem={removeItem} handleChange={handleChange} category={k as FeaturedLabelCategory} label={k} group={grouped[k as keyof typeof grouped] as FeatureLabelType[]} key={`group-list-${k}`} />))}
        </div>
    )
}



export default SetFeaturedContentSection;

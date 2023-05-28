import React from 'react'
import { HighlightedFeatureType } from '../../../types/UITypes';
import { IconType } from 'react-icons/lib';
import { Card } from 'primereact/card';



interface FeatureHighlightCardProps {
    item: HighlightedFeatureType
    Icon: IconType
}

const FeatureHighlightCard = ({ item, Icon }: FeatureHighlightCardProps) => {
    return (
        <Card className={'flex relative flex-col justify-center items-center shadow-md hover:shadow-sm transition-shadow duration-300 mt-12 lg:mt-0'}>
            <Icon className={'text-[--primary-color-text] bg-[--primary-color] p-3 w-[5rem] h-auto absolute left-[50%] top-0'} style={{
                borderRadius: "50%",
                transform: "translate(-50%, -50%)"
            }} />
            <div className={'text-2xl w-full text-center text-bold mt-6'}>{item.title}</div>
            <div className={'px-2 max-w-3/4 py-2 w-full text-center font-thin'}>{item.body}</div>
        </Card>
    )
}



export default FeatureHighlightCard;

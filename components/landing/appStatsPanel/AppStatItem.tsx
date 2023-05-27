import React from 'react'
import { AppStatItemType } from '../../../types/UITypes';
import { FaUsers, FaDollarSign, FaImages, FaCommentDots } from 'react-icons/fa'
import { IconBaseProps } from 'react-icons/lib';


interface AppStatItemProps {
    item: AppStatItemType
    idx: number
}

const Icons = [
    FaUsers,
    FaDollarSign,
    FaImages,
    FaCommentDots
]

const IconMap = ({ idx, className }: { idx: number, className: string }) => {
    const Icon = Icons[idx]
    return <Icon className={className} />
}

const AppStatItem = ({ item, idx }: AppStatItemProps) => {
    return (
        <div className={'w-full xs:w-fit px-3 py-4 grid app-stat-item-grid gap-3 text-[highlight-text-color] bg-[--highlight-bg] rounded raise-md-hover select-none cursor-default xs:min-w-[265px]'}>
            <div className={'h-full w-full flex justify-center items-center xs:min-w-[3rem] select-none'}>
                <IconMap idx={idx} className={'h-full w-auto text-[--highlight-text-color]'} />
            </div>
            <div className={'flex flex-col justify-between items-start text-[--highlight-text-color]'}>
                <div className={'text-3xl lg:text-4xl select-none'}>
                    {item.formatValue ? item.formatValue(item.value) : item.value}
                </div>
                <div className={'text-xl lg:text-1xl select-none'}>
                    {item.formatLabel ? item.formatLabel(item.label) : item.label}
                </div>
            </div>
        </div>
    )
}



export default AppStatItem;

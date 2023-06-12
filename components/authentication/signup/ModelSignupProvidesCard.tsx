import React, { ChangeEventHandler } from 'react'
import { ModelOffersData } from 'app/signup/model/page';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import Button from '@/io/Button';


interface ModelSignupOffersCardProps {
    data: ModelOffersData
    setData: (data: ModelOffersData) => void
    handleSubmit: () => void
}

interface OfferItemProps {
    label: string
    value: boolean
    name: keyof ModelOffersData
    toggleItem: (n: keyof ModelOffersData) => void
}


const OffersItem = ({ value, toggleItem, name, label }: OfferItemProps) => {
    return (
        <div className={'flex flex-row gap-2 flex-nowrap'}>
            <Checkbox checked={value} onChange={() => toggleItem(name)} />
            <div>{label}</div>
        </div>
    )
}

const ModelSignupOffersCard = ({ data, setData, handleSubmit }: ModelSignupOffersCardProps) => {
    const toggleItem = (name: keyof typeof data) => {
        setData({
            ...data,
            [name]: !data[name]
        })
    }
    return (
        <Card className={'h-fit pb-0'} style={{
            width: "min(640px, 80vw)"
        }}>
            <div className={'flex flex-col justify-center items-center gap-4'}>
                <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-4'}
                    style={{
                        gridColumnGap: "2rem"
                    }}>
                    <OffersItem toggleItem={toggleItem} value={data.drawers} name="drawers" label="Used Panties" />
                    <OffersItem toggleItem={toggleItem} value={data.videos} name="videos" label="Video Content" />
                    <OffersItem toggleItem={toggleItem} value={data.webcamChats} name="webcamChats" label="Webcam Chats" />
                    <OffersItem toggleItem={toggleItem} value={data.photos} name="photos" label="Photos" />
                    <OffersItem toggleItem={toggleItem} value={data.sexting} name="sexting" label="Sexting" />
                </div>
                <div className={'w-full h-fit'}>
                    <div className={'text-lg my-2'}>Other:</div>
                    <InputTextarea value={data.other} onChange={(e) => setData({
                        ...data,
                        other: e.target.value
                    })}
                        className={'w-full'}
                    />
                </div>
                <div className={'w-full flex flex-row justify-end items-center'}>
                    <Button onClick={handleSubmit} label="Submit" />
                </div>
            </div>
        </Card>
    )
}



export default ModelSignupOffersCard;

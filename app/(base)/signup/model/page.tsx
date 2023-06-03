"use client"
import React, { useState } from 'react'
import ModelSignupOffersCard from '../../../../components/authentication/signup/ModelSignupProvidesCard'
import { useRouter } from 'next/navigation'



interface ModelSignupDetailsProps {

}

export interface ModelOffersData {
    drawers: boolean
    videos: boolean
    webcamChats: boolean
    photos: boolean
    sexting: boolean
    other: string
}

const ModelSignupDetails = (props: ModelSignupDetailsProps) => {
    const router = useRouter()
    const [offerData, setOfferData] = useState<ModelOffersData>({
        drawers: false,
        videos: false,
        webcamChats: false,
        photos: false,
        sexting: false,
        other: ""
    })

    const handleSubmit = () => {
        router.push("/")
    }

    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <ModelSignupOffersCard data={offerData} setData={setOfferData} handleSubmit={handleSubmit} />

        </div>
    )
}



export default ModelSignupDetails;

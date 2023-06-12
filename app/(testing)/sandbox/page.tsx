"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ModelOffersData } from 'app/signup/model/page'
import ModelSignupOffersCard from '@/authentication/signup/ModelSignupProvidesCard'



interface SandboxProps {

}

const Sandbox = (props: SandboxProps) => {
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
            <div className={'mb-6'}>
                <div className={'text-2xl'}>I Offer:</div>
                <div className={'w-full h-[3px] bg-[--primary-color]'} />
            </div>
            <ModelSignupOffersCard data={offerData} setData={setOfferData} handleSubmit={handleSubmit} />
        </div>
    )
}



export default Sandbox;

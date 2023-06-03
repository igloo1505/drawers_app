"use client"
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import BuyerSignupCard from './Buyer';
import SellerSignupCard from './Seller';
import { Card } from 'primereact/card';
import Button from '../../io/Button';
import TabButtons from './TabButtons';
import { InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { CheckboxChangeEvent } from 'primereact/checkbox';

const wrapperIds = {
    buyer: "buyer-wrapper-id",
    seller: "seller-wrapper-id"
}

interface SignUpCardProps {

}

export interface formDataType {
    username: string
    password: string
    confirmPassword: string
    email: string
    age: string | number
    agreeToTerms: boolean,
    confirmAge: boolean
}

export interface formState {
    seller: formDataType
    buyer: formDataType
}


const SignUpCard = (props: SignUpCardProps) => {
    const cardContainer = useRef<HTMLDivElement>(null!)
    const setMinHeight = () => {
        const padding = 32
        if (typeof window === "undefined") return;
        let buyerEm = document.getElementById(wrapperIds.buyer)?.getBoundingClientRect()
        let sellerEm = document.getElementById(wrapperIds.seller)?.getBoundingClientRect()
        if (!buyerEm || !sellerEm) return;
        const newHeight = buyerEm.height > sellerEm.height ? `${buyerEm.height + padding}px` : `${sellerEm.height + padding}px`
        console.log("newHeight", newHeight, buyerEm)
        cardContainer.current.style.minHeight = newHeight
    }
    useEffect(() => {
        if (typeof window === "undefined") return;
        setMinHeight()
        window.addEventListener("resize", setMinHeight)
    }, [])
    const [isSeller, setIsSeller] = useState(false)
    const [formData, setFormData] = useState<formState>({
        seller: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            age: 18,
            agreeToTerms: false,
            confirmAge: false
        },
        buyer: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            age: 18,
            agreeToTerms: false,
            confirmAge: false
        }
    })

    const handleStringChange: ChangeEventHandler = (e) => {
        let newData: formState = { ...formData }
        let target = e.target as HTMLInputElement
        if (isSeller) {
            newData.seller = {
                ...newData.seller,
                [target.name]: target.value
            }
        }
        if (!isSeller) {
            newData.buyer = {
                ...newData.buyer,
                [target.name]: target.value
            }
        }
        setFormData(newData)
    }
    const handleBooleanChange = (e: CheckboxChangeEvent) => {
        let newData: formState = { ...formData }
        let target = e.target as HTMLInputElement
        if (isSeller) {
            newData.seller = {
                ...newData.seller,
                [target.name]: !newData.seller[target.name as keyof formDataType] as boolean
            }
        }
        if (!isSeller) {
            newData.buyer = {
                ...newData.buyer,
                [target.name]: !newData.buyer[target.name as keyof formDataType] as boolean
            }
        }
        setFormData(newData)
    }

    const handleAge = (e: InputNumberValueChangeEvent) => {
        let newData: formState = { ...formData }
        let validAge = e.value && e.value >= 18 && e.value <= 100
        if (isSeller) {
            newData.seller = {
                ...newData.seller,
                age: validAge && e.value ? e.value : 18
            }
        }
        if (!isSeller) {
            newData.buyer = {
                ...newData.buyer,
                age: validAge && e.value ? e.value : 18
            }
        }
        setFormData(newData)
    }
    return (
        <div className={'shadow-lg overflow-hidden rounded-xl'}>
            <TabButtons isSeller={isSeller} setIsSeller={setIsSeller} />
            <div className={'relative py-4 px-4'} style={{
                minWidth: "min(80vw, 640px)"
            }} ref={cardContainer}>
                <BuyerSignupCard active={!isSeller} handleString={handleStringChange} handleBoolean={handleBooleanChange} formData={formData} handleAge={handleAge} wrapperId={wrapperIds.buyer} />
                <SellerSignupCard active={isSeller} handleString={handleStringChange} handleBoolean={handleBooleanChange} formData={formData} handleAge={handleAge} wrapperId={wrapperIds.seller} />
            </div>
            <div className={'w-full flex flex-row justify-end items-center py-6 px-6'}>
                <Button label="Sign Up" />
            </div>
        </div >
    )
}



export default SignUpCard;

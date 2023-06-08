"use client"
import React, { ChangeEventHandler, useState } from 'react'
import BuyerSignupCard from './Buyer';
import SellerSignupCard from './Seller';
import { Card } from 'primereact/card';
import Button from '../../io/Button';
import TabButtons from './TabButtons';
import { InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import { createNewUser } from '../../../state/actions/authActions';
import { useRouter } from 'next/navigation';

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
    role: "SELLER" | "USER" | "ADMIN"
}

export interface formState {
    seller: formDataType
    buyer: formDataType
}


const SignUpCard = (props: SignUpCardProps) => {
    const router = useRouter()
    const [isSeller, setIsSeller] = useState(false)
    const [formData, setFormData] = useState<formState>({
        seller: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            age: 18,
            agreeToTerms: false,
            confirmAge: false,
            role: "SELLER"
        },
        buyer: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            age: 18,
            agreeToTerms: false,
            confirmAge: false,
            role: "USER"
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

    const handleSignup = async () => {
        const data = isSeller ? formData.seller : formData.buyer
        const success = await createNewUser(data)
        console.log("Success", success)
        if (success) {
            router.push("/signup/model")
        }
    }
    return (
        <div className={'shadow-lg overflow-hidden rounded-xl'}>
            <TabButtons isSeller={isSeller} setIsSeller={setIsSeller} />
            <div className={'relative py-4 px-4'} style={{
                minWidth: "min(80vw, 640px)"
            }}>
                <BuyerSignupCard active={!isSeller} handleString={handleStringChange} handleBoolean={handleBooleanChange} formData={formData} handleAge={handleAge} wrapperId={wrapperIds.buyer} />
                <SellerSignupCard active={isSeller} handleString={handleStringChange} handleBoolean={handleBooleanChange} formData={formData} handleAge={handleAge} wrapperId={wrapperIds.seller} />
            </div>
            <div className={'w-full flex flex-row justify-end items-center py-6 px-6'}>
                <Button label="Sign Up" onClick={handleSignup} />
            </div>
        </div >
    )
}



export default SignUpCard;

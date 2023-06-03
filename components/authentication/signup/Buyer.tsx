"use client"
import React, { ChangeEventHandler } from 'react'
import { formState } from './Card'
import TextInput from './TextInput'
import { comparePasswordInputs, validateEmail, validatePassword, validateUsername } from '../../../utils/validation'
import AgeInput from './AgeInput'
import { DropdownChangeEvent } from 'primereact/dropdown'
import ConfirmTermsOfUse from './ConfirmTermsOfUse'
import { CheckboxChangeEvent } from 'primereact/checkbox'
import ConfirmAge from './ConfirmAge'

interface BuyerSignupCardProps {
    active: boolean
    handleString: ChangeEventHandler
    handleBoolean: (e: CheckboxChangeEvent) => void
    handleAge: (e: DropdownChangeEvent) => void
    formData: formState
    wrapperId: string
}

const BuyerSignupCard = ({ active, formData, handleBoolean, handleString, handleAge, wrapperId }: BuyerSignupCardProps) => {
    const validatePasswordCompare = (confirmPass: string) => {
        return comparePasswordInputs(formData.buyer.password, confirmPass)
    }
    return (
        <div className={'w-full px-4 h-full transition-transform duration-500 flex flex-col gap-2'} style={{
            transform: active ? "translateX(0)" : "translateX(-100%)"
        }} id={wrapperId}>
            <TextInput validate={validateUsername} label="Username" name="username" value={formData.buyer.username} onChange={handleString} id="buyer-signup-username" />
            <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'}>
                <TextInput label="Password" name="password" value={formData.buyer.password} onChange={handleString} id="buyer-signup-password" isPassword={true} />
                <TextInput validate={validatePasswordCompare} label="Confirm Password" name="confirmPassword" value={formData.buyer.confirmPassword} onChange={handleString} id="buyer-signup-confirmPassword" isPassword={true} />
            </div>
            <TextInput validate={validateEmail} label="Email" name="email" value={formData.buyer.email} onChange={handleString} id="buyer-signup-email" />
            <AgeInput onChange={handleAge} value={formData.buyer.age} />
            <ConfirmTermsOfUse value={formData.buyer.agreeToTerms} onChange={handleBoolean} />
            <ConfirmAge value={formData.buyer.confirmAge} onChange={handleBoolean} />
        </div>
    )
}



export default BuyerSignupCard;

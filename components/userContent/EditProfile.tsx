"use client"
import { Profile } from '@prisma/client';
import React, { ChangeEvent, useState } from 'react'
import TextInput from '../io/TextInput';
import { Card } from 'primereact/card';



interface EditProfileProps {
    profile: Profile | null
}

const EditProfile = ({ profile }: EditProfileProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        imageIds: [],
        introduction: "",
        location: "",
        interests: "",
        tags: []
    })
    const handleTextChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    console.log("Profile", profile)

    return (
        <div className={'w-fit h-fit flex flex-col justify-center items-center bg-[--surface-card]'}>
            <TextInput onChange={handleTextChange} name="firstName" label="First Name" value={formData.firstName} />
            <TextInput onChange={handleTextChange} name="lastName" label="Last Name" value={formData.lastName} />
        </div >
    )
}



export default EditProfile;

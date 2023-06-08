"use client"
import type { Profile, Tag } from '@prisma/client';
import React, { ChangeEvent, useEffect, useState } from 'react'
import TextInput from '../io/TextInput';
import clsx from 'clsx';
import TextAreaInput from '../io/TextAreaInput';
import TagInput from '../io/TagInput';
import { getTagsClientside } from '../../state/actions/populateActions';
import { formatTagText } from '../../utils/formatting';
import { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { RemoveTagFuncType } from '../../types/contentManipulationTypes';
import Button from '../io/Button';
import { submitProfileData } from '../../state/actions/asyncActions';


interface FormDataType {
    userName: string,
    firstName: string,
    lastName: string,
    imageIds: string[],
    introduction: string,
    location: string,
    interests: string,
    tags: Tag[],
    preexistingTags: Tag[],
    currentTagQuery: string
}

interface EditProfileProps {
    profile?: Profile
    userId: string
}


const dummyTag = {
    value: "SomeTag",
    formattedValue: "SomeTag"
}

const EditProfile = ({ profile, userId }: EditProfileProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [formData, setFormData] = useState<FormDataType>({
        userName: userId,
        firstName: "",
        lastName: "",
        imageIds: [],
        introduction: "",
        location: "",
        interests: "",
        tags: [dummyTag],
        preexistingTags: [],
        currentTagQuery: ""
    })


    const setTagsFromQuery = async (query: string) => {
        if (formData.currentTagQuery.length >= 3 && !isLoading) {
            setIsLoading(true)
            const tags = await getTagsClientside(query)
            setFormData({
                ...formData,
                preexistingTags: tags
            })
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setTagsFromQuery(formData.currentTagQuery)
    }, [formData.currentTagQuery])

    const handleTextChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    const focusTrue = () => setIsFocused(true)
    const focusFalse = () => setIsFocused(false)
    const currentTagExists = (value: string) => {
        return formData.tags.map((t) => t.value.toLowerCase()).indexOf(value.toLowerCase()) >= 0
    }
    const handleTagAppend = () => {
        let tag: Tag = {
            value: formData.currentTagQuery,
            formattedValue: formatTagText(formData.currentTagQuery)
        }
        setFormData({
            ...formData,
            tags: currentTagExists(formData.currentTagQuery) ? formData.tags : [...formData.tags, tag],
            currentTagQuery: ""
        })
    }

    const handleAutoComplete = (e: AutoCompleteCompleteEvent) => {
        console.log("Completing with: ", e)
    }

    const handleRemove: RemoveTagFuncType = (idx) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter((x, i) => i !== idx)
        })
    }

    const handleSubmit = async () => {
        const data: Partial<Profile> = {
            userName: userId,
            firstName: formData.firstName,
            lastName: formData.lastName,
            imageIds: [],
            introduction: formData.introduction,
            interests: formData.interests
        }
        const res = await submitProfileData(data)
    }

    return (
        <div className={clsx('w-fit h-fit flex flex-col gap-2 justify-center items-center bg-[--surface-card]  px-6 py-6 rounded-lg transition-shadow duration-300', isFocused ? "shadow-lg" : "shadow-sm")} style={{
            width: "min(calc(100vw - 4rem), 768px)"
        }}>
            <div className={'grid grid-cols-1 mdlg:grid-cols-2 gap-2 w-full'}>
                <TextInput onChange={handleTextChange} name="firstName" label="First Name" value={formData.firstName} onFocus={focusTrue} onBlur={focusFalse} />
                <TextInput onChange={handleTextChange} name="lastName" label="Last Name" value={formData.lastName} onFocus={focusTrue} onBlur={focusFalse} />
            </div>
            <TextAreaInput onChange={handleTextChange} name="introduction" label="Introduction" value={formData.introduction} onFocus={focusTrue} onBlur={focusFalse} />
            <TextAreaInput onChange={handleTextChange} name="interests" label="Interests" value={formData.interests} onFocus={focusTrue} onBlur={focusFalse} />
            <TagInput onFocus={focusTrue} onBlur={focusFalse} handleRemove={handleRemove} onChange={(e) => {
                setFormData({
                    ...formData,
                    currentTagQuery: e.value
                })
            }} value={formData.currentTagQuery} options={formData.preexistingTags} handleAppend={handleTagAppend} onComplete={handleAutoComplete} currentTags={formData.tags} />
            <div className={'w-full flex flex-row justify-end items-end'}>
                <Button label="Submit" onClick={handleSubmit} />
            </div>
        </div >
    )
}



export default EditProfile;

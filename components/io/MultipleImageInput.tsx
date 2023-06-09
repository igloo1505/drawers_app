"use client"
import ImageSlider from 'components/ui/media/ImageSlider'
import React, { useState } from 'react'
import { FileUpload, FileUploadHandlerEvent, FileUploadUploadEvent } from 'primereact/fileupload';
import { Image } from '@prisma/client';
import NextImage from 'next/image';
import { ItemTemplateOptions } from 'primereact/fileupload';
import Button from './Button';
import { submitImages } from 'state/actions/asyncActions';
import useAxios, { methodEnum } from 'state/hooks/useAxios';

export type ImageTargetType = "profile" | "post" | "item"

interface MultipleImageInputProps {
    retrievedImages: Image[]
    title: string
    imageTargetType: ImageTargetType
    targetId?: string
}

const itemTemplate = (file: object | any, props: ItemTemplateOptions) => {
    return (
        <div className={'grid gap-4 break-all'} style={{
            gridTemplateColumns: "auto 1fr 48px"
        }}>
            <NextImage src={file.objectURL} width={150} height={150} className={'max-h-[100px] max-w-[100px] lg:max-h-[120px] lg:max-w-[120px]  w-auto'} alt={file.name} />
            <div>
                <div className={'flex flex-row justify-start items-start flex-wrap'}>{file.name}</div>
            </div>
            <div className={'flex flex-col justify-start items-end'}>
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={(e) => props.onRemove(e)} />
            </div>
        </div>
    )
}

const MultipleImageInput = ({ retrievedImages, title, imageTargetType, targetId }: MultipleImageInputProps) => {
    const axios = useAxios()
    const [images, setImages] = useState(retrievedImages)
    const uploader = async (e: FileUploadHandlerEvent) => {
        if (targetId) {
            const files: Blob[] = e.files
            const formData = new FormData()
            files.forEach((f) => {
                formData.append('files', f)
            })
            formData.set('imageTargetType', imageTargetType)
            formData.set('targetId', targetId)
            const res = await axios.send({
                method: methodEnum.post,
                url: `/api/media/images/addImage`,
                data: formData,
                headers: { "content-type": "multipart/form-data" },
            })
            submitImages(formData)
        }
    }
    return (
        <div className={''} style={{
            width: "min(calc(100vw - 4rem), 768px)"
        }}>
            <div className={'text-3xl w-full text-center mb-6'}>{title}</div>
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} itemTemplate={itemTemplate} customUpload uploadHandler={uploader} />
            <ImageSlider images={images} />
        </div>
    )
}


MultipleImageInput.displayName = "MultipleImageInput"


export default MultipleImageInput;

import { Image } from '@prisma/client'
import React from 'react'
import { ImageType } from 'types/ContentTypes'



interface ImageSliderProps {
    images: Image[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    return (
        <div className={'w-full flex flex-row gap-2 mt-6'}>Image Slider</div>
    )
}


ImageSlider.displayName = "ImageSlider"


export default ImageSlider;

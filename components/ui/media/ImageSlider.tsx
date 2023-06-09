import { Image } from '@prisma/client'
import React from 'react'
import { Carousel } from 'primereact/carousel'
import NextImage from 'next/image'



interface ImageSliderProps {
    images: Image[]
}

const ImageTemplate = (imageData: Image) => {
    console.log("imageData: ", imageData)
    return (
        <div><NextImage src={imageData.url} width={200} height={200} alt="Profile Image" /></div>
    )
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    return (
        <div className={'w-full flex flex-row gap-2 mt-6'}>
            <Carousel value={images} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="image-input-carousel" circular
                autoplayInterval={3000} itemTemplate={ImageTemplate} />
        </div>
    )
}


ImageSlider.displayName = "ImageSlider"


export default ImageSlider;

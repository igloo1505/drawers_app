import { Image } from '@prisma/client'
import React from 'react'
import { Carousel } from 'primereact/carousel'
import NextImage from 'next/image'
import Link from 'next/link'



interface ImageSliderProps {
    images: Image[]
}

const ImageTemplate = (imageData: Image) => {
    return (
        <div className={'w-full h-full flex justify-center items-center'}>
            <Link href={`/images/${imageData.id}`}>
                <NextImage src={imageData.url} width={200} height={200} alt="Profile Image" />
            </Link>
        </div>
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
                itemTemplate={ImageTemplate} />
        </div>
    )
}


ImageSlider.displayName = "ImageSlider"


export default ImageSlider;

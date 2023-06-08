import React from 'react'
import { ImageType } from 'types/ContentTypes'



interface ImageSliderProps {
    images: ImageType[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    return (
        <div>Image Slider</div>
    )
}


ImageSlider.displayName = "ImageSlider"


export default ImageSlider;

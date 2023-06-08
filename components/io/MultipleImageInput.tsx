import ImageSlider from 'components/ui/media/ImageSlider'
import React from 'react'
import { ImageType } from 'types/ContentTypes'



interface MultipleImageInputProps {
    images: ImageType[]
    appendImages: (images: ImageType[]) => void
}

const MultipleImageInput = ({ images }: MultipleImageInputProps) => {
    return (
        <div className={''} style={{
            width: "min(calc(100vw - 4rem), 768px)"
        }}>
            <ImageSlider images={images} />
        </div>
    )
}


MultipleImageInput.displayName = "MultipleImageInput"


export default MultipleImageInput;

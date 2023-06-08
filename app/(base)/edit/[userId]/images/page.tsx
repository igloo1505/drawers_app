import MultipleImageInput from 'components/io/MultipleImageInput'
import React from 'react'



interface EditImagesPageProps {
    params: {
        userId: string
    }
}

const EditImagesPage = ({ params: {
    userId
} }: EditImagesPageProps) => {
    return (
        <div>
            <MultipleImageInput />
        </div>
    )
}


EditImagesPage.displayName = "EditImagesPage"


export default EditImagesPage;

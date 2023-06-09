import MultipleImageInput from 'components/io/MultipleImageInput'
import { prisma } from 'db/db'
/* import React from 'react' */



interface EditImagesPageProps {
    params: {
        userId: string
    }
}

const EditImagesPage = async ({ params: {
    userId
} }: EditImagesPageProps) => {
    const userData = await prisma.user.findFirst({
        where: {
            username: userId
        },
        include: {
            profile: {
                include: {
                    images: true,
                    tags: true
                }
            }
        }
    })
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <MultipleImageInput retrievedImages={userData?.profile?.images || []} title="Profile Images" imageTargetType='profile' targetId={userData?.username} />
        </div>
    )
}


EditImagesPage.displayName = "EditImagesPage"


export default EditImagesPage;

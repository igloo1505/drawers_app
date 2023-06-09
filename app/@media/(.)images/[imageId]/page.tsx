import ImageModal from '@/ui/media/ImageModal';
/* import MediaModalWrapper from '@/ui/modals/MediaModalWrapper'; */

interface ImageModalPageProps {
    params: {
        imageId: string
    }
}


const ImageModalPage = ({ params: {
    imageId
} }: ImageModalPageProps) => {
    /* const url = `${process.env.BASE_GCP_URI}/${process.env.FIREBASE_STORAGE_BUCKET}/${imagePath}.png` */
    const url = `/api/images/${imageId}`
    return (
        <div className={'w-screen h-screen fixed top-0 left-0 bg-green-500 z-[9999]'}>
            Media Modal here!!!!
            <ImageModal url={url} />
        </div>
    )
}


ImageModalPage.displayName = "ImageModalPage"


export default ImageModalPage;

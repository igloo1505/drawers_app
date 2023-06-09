"use client"
import Image from 'next/image'
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";


interface ImageModalProps {
    url: string
}

const ImageModal = ({ url }: ImageModalProps) => {

    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);
    return (
        <div className={'w-full h-auto absolute top-[50%] left-[50%] z-50'}
            style={{
                maxWidth: "min(980px, calc(100vw - 6rem))"
            }}
        >
            <Image src={url} width={1080} height={1080} alt="User Image" id="image-modal" />
        </div>
    )
}


ImageModal.displayName = "ImageModal"


export default ImageModal;

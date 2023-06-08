import { initFirebase } from "db/initFirebase";
import Multer from "multer";
import FirebaseStorage from 'multer-firebase-storage'
import type { NextRequest } from "next/server";

const firebase = initFirebase()

export const acceptMimeTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webm",
];


export const imageMiddleware = Multer({
    storage: FirebaseStorage({
        bucketName: process.env.FIREBASE_STORAGE_BUCKET,
        credentials: {
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        public: true,
    }, firebase),
    fileFilter(req, file, callback) {
        if (acceptMimeTypes.indexOf(file.mimetype) >= 0) {
            return callback(null, true);
        }
        return callback(null, false);
    },
});

export interface multerFileType {
    destination: string;
    encoding: string;
    fieldname: string;
    filename: string;
    mimetype: string;
    originalname: string;
    publicUrl: string;
    path: string;
    size: number;
}

interface RequestWithFiles extends NextRequest {
    files: multerFileType[]
}

export const getImagesFromRequest = (req: RequestWithFiles) => {
    console.log("Get image from request here: ", req.json())
    let images = req?.files?.map((f: multerFileType) => {
        return { url: `${f.publicUrl}`, path: `${f.path}` };
    })
    return images
}




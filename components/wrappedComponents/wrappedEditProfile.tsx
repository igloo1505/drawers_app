"use client"
import { Profile } from '@prisma/client'
import ReduxProvider from '../strucutre/redux-provider'
import EditProfile from '../userContent/EditProfile'


const WrappedEditProfileForm = ({ profile, userId }: { profile?: Profile, userId: string }) => {
    return (
        <ReduxProvider>
            <EditProfile profile={profile} userId={userId} />
        </ReduxProvider>
    )
}

export default WrappedEditProfileForm 

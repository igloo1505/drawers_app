import React from 'react'
import { getProfile } from 'state/actions/serverActions';
import { getBlankProfile } from 'types/ContentTypes';
import WrappedEditProfileForm from 'components/wrappedComponents/wrappedEditProfile';


interface ProfilePageProps {
    params: {
        userId: string
    }
}


const ProfilePage = async (props: ProfilePageProps) => {
    const userId = props?.params?.userId
    let profile = await getProfile(userId) || getBlankProfile(userId)
    return (
        <div className={'w-full h-fit flex flex-col justify-center items-center'}>
            <div className={'text-3xl mb-6'}>My Profile</div>
            <WrappedEditProfileForm profile={profile} userId={userId} />
        </div>
    )
}



export default ProfilePage;

import React from 'react'
import { getProfile } from '../../../../state/actions/serverActions';
import EditProfile from '../../../../components/userContent/EditProfile';
import { getBlankProfile } from '../../../../types/ContentTypes';
/* import { clearTokens, isAuthenticated, validateFromCookieValues } from '../../../../utils/auth'; */
/* import { cookies, headers } from 'next/headers'; */
/* import { redirect } from 'next/navigation'; */
/* import store from '../../../../state/store'; */
/* import { logout } from '../../../../state/slices/auth'; */


interface ProfilePageProps {
    params: {
        userId: string
    }
}


const ProfilePage = async (props: ProfilePageProps) => {
    const userId = props?.params?.userId
    /* const cookieJar = cookies() */
    /* let authToken = cookieJar.get('auth')?.value */
    /* if (!authToken) { */
    /*     clearTokens() */
    /*     store.dispatch(logout()) */
    /*     redirect("/") */

    /* } */
    /* const authenticated = validateFromCookieValues(userId, authToken) */
    /* if (!authenticated) { */
    /*     store.dispatch(logout()) */
    /*     clearTokens() */
    /*     redirect("/") */
    /* } */
    let profile = await getProfile(userId) || getBlankProfile(userId)
    return (
        <div className={'w-full h-fit flex flex-col justify-center items-center'}>
            <EditProfile profile={profile} />
        </div>
    )
}



export default ProfilePage;

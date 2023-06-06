import type { NextPage } from 'next'
import { cookies } from 'next/headers';
import UnauthenticatedHome from '../../components/landing/Unauthenticated';
import { validateFromCookieValues } from '../../utils/auth';
import AuthenticatedHome from '../../components/landing/authenticatedHome/AuthenticatedHome';



const HomePage: NextPage = () => {
    const cookieJar = cookies()
    const userId = cookieJar.get('userId')?.value
    const auth = cookieJar.get('auth')?.value
    console.log("UserId, auth: ", userId, auth)
    if (!userId || !auth || !validateFromCookieValues(userId, auth)) {
        return (
            <div>
                <UnauthenticatedHome />
            </div>
        )
    }
    return (
        <AuthenticatedHome />
    )
}

HomePage.displayName = "UnAuthenticatedHome"


export default HomePage;

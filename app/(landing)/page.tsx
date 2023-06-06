import UnauthenticatedHome from '../../components/landing/Unauthenticated';
import { validateFromCookieValues, checkAuthenticated } from '../../utils/auth';
import AuthenticatedHome from '../../components/landing/authenticatedHome/AuthenticatedHome';
import AuthObserver from '../../state/authObserver';



const HomePage = async () => {
    const authenticated = await checkAuthenticated()
    if (!authenticated) {
        return (
            <div>
                <AuthObserver authenticated={authenticated} />
                <UnauthenticatedHome />
            </div>
        )
    }
    return (
        <>
            <AuthObserver authenticated={authenticated} />
            <AuthenticatedHome />
        </>
    )
}

HomePage.displayName = "UnAuthenticatedHome"


export default HomePage;

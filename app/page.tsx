import { checkAuthenticated } from 'utils/authWithCookiesHook';
import AuthenticatedHome from 'components/landing/authenticatedHome/AuthenticatedHome';
import WrappedAuthObserver from 'components/wrappedComponents/wrappedAuthObserver';
import WrappedUnauthenticatedHome from 'components/wrappedComponents/developmentOnly/wrappedUnauthenticatedHome';
import 'styles/landing.scss'

const HomePage = async () => {
    const authenticated = await checkAuthenticated()
    if (!authenticated) {
        return (
            <div>
                <WrappedAuthObserver authenticated={authenticated} />
                <WrappedUnauthenticatedHome />
            </div>
        )
    }
    return (
        <>
            <WrappedAuthObserver authenticated={authenticated} />
            <AuthenticatedHome />
        </>
    )
}

HomePage.displayName = "UnAuthenticatedHome"


export default HomePage;

/* import React from 'react' */
import type { NextPage } from 'next'
import Feed from '../../components/landing/authenticatedHome/Feed';




interface AuthenticatedHomeProps {

}

const AuthenticatedHome = (props: AuthenticatedHomeProps) => {
    return (
        <div>
            <Feed />
        </div>
    )
}



export default AuthenticatedHome;

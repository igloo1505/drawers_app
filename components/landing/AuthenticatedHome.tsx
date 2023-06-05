"use client"
import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { RetrievedUserData } from '../../state/types/AuthTypes';
import SellerHomePage from './SellerHome';
import BuyerHomepage from './BuyerHome';

const connector = connect((state: RootState, props: any) => ({
    user: state.auth.user,
    props: props
}))


interface AuthenticatedHomeProps {
    user: RootState['auth']['user']
}

const AuthenticatedHome = connector(({ user }: AuthenticatedHomeProps) => {
    return (
        <div>
            <div>Authenticated: {user.role}</div>
            {user?.role === "SELLER" && <SellerHomePage />}
            {user?.role === "USER" && <BuyerHomepage />}
        </div>
    )
})

AuthenticatedHome.displayName = "AuthenticatedHome"



export default AuthenticatedHome;

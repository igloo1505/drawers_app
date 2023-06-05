"use client"
/* import React from 'react' */
import type { NextPage } from 'next'
/* import { connect } from 'react-redux'; */
/* import { RootState } from '../../state/store'; */
/* import { AppDataType } from '../../state/initial/appData'; */
import UnauthenticatedHome from '../../components/landing/Unauthenticated';

/* const connector = connect((state: RootState, props: any) => ({ */
/*     appData: state.UI.appData, */
/*     authenticated: state.auth.authenticated, */
/*     props: props */
/* })) */



const HomePage: NextPage = () => {
    return (
        <div>
            <UnauthenticatedHome />
        </div>
    )
}

HomePage.displayName = "UnAuthenticatedHome"


export default HomePage;

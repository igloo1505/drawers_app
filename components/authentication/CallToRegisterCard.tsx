"use client"
import React, { useState } from 'react'
import GenericCard from '../ui/Card';
/* import appData from '../../state/initial/appData'; */
import Button from '../io/Button';
import Link from 'next/link';
import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { AppDataType } from '../../state/initial/appData';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    props: props
}))

const CallToLogin = connector(({ appData }: { appData: AppDataType }) => {
    return (
        <GenericCard extraClasses="h-full w-full symmetric-grid-card">
            <div className={'w-full h-full flex flex-col justify-center items-between'}>
                <div className={'w-fit text-3xl  flex flex-row justify-center items-start'}>
                    <div className={'pl-2 pb-1'} style={{
                        borderLeft: "3px solid var(--primary-color)",
                        borderBottom: "3px solid var(--primary-color)",
                    }}>
                        {appData.authentication.callToLoginCardHeader}
                    </div>
                    <div className={'w-6 relative'}>
                        <span className={'absolute top-[-0.65rem] text-6xl font-semibold text-[--primary-color]'}>?</span>
                    </div>
                </div>
                <div className={'h-fit px-3 my-2 text-lg py-4 flex-grow'}>
                    {appData.authentication.callToLoginCardBody}
                </div>
                <div className={'flex flex-row justify-end items-end'}>
                    <Link href="/signup">
                        <Button label="Sign Up For Free" />
                    </Link>
                </div>
            </div>
        </GenericCard>
    )
})

CallToLogin.displayName = "CallToLogin"



export default CallToLogin;

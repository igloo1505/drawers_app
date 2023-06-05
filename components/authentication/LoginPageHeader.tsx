"use client"
import React from 'react'
import { AppDataType } from '../../state/initial/appData';
import UnderlineGrowOnRender from '../ui/UnderlineGrowOnRender';
import { connect } from 'react-redux';
import { RootState } from '../../state/store';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    props: props
}))

const LoginPageHeader = connector(({ appData }: { appData: AppDataType }) => {
    return (
        <div className={'text-5xl my-6 w-full flex justify-center text-center'}>
            <div className={'w-fit'}>
                <div className={''}>
                    {appData.authentication.loginPageHeading}
                    <UnderlineGrowOnRender id="loginPageHeaderUnderline" />
                </div>
            </div>
        </div>
    )
})

LoginPageHeader.displayName = "LoginPageHeader"


export default LoginPageHeader;

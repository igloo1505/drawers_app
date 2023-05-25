import React from 'react'
import appData from '../../state/initial/appData';
import UnderlineGrowOnRender from '../ui/UnderlineGrowOnRender';


const LoginPageHeader = () => {
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
}



export default LoginPageHeader;

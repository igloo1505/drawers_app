import React from 'react'
import GenericCard from '../ui/Card';
import appData from '../../state/initial/appData';
import Button from '../io/Button';
import Link from 'next/link';


const CallToLogin = () => {
    return (
        <GenericCard extraClasses="h-full w-full symmetric-grid-card">
            <div className={'w-full h-full flex flex-col justify-center items-between'}>
                <div className={'h- w-fit text-3xl pl-2'} style={{
                    borderLeft: "3px solid var(--primary-color)",
                    borderBottom: "3px solid var(--primary-color)",
                }}>
                    {appData.authentication.callToLoginCardHeader}
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
}



export default CallToLogin;
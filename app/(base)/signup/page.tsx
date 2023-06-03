import type { NextPage } from 'next';
import React from 'react'
import SignUpCard from '../../../components/authentication/signup/Card';
import { Card } from 'primereact/card';


const Signup: NextPage = () => {
    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            <SignUpCard />
        </div>
    )
}



export default Signup;

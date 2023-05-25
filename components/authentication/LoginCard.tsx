"use client"
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import TextInput from '../io/TextInput';
import GenericCard from '../ui/Card';
import Checkbox from '../io/Checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { loginUser } from '../../state/actions/authActions';
import { connect } from 'react-redux';
import { RootState } from '../../state/store';



interface loginCardData {
    email: string
    password: string
    rememberMe: boolean
}



const connector = connect((state: RootState, props: any) => ({
    props: props
}), { loginUser })

const LoginCard = connector(({ loginUser }: { loginUser: (data: LoginUserData) => void }) => {
    const [data, setData] = useState<loginCardData>({
        email: "",
        password: "",
        rememberMe: false
    })
    const handleChange: ChangeEventHandler = (e) => {
        const target = e.target as HTMLInputElement
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    const handleBooleanChange = (e: CheckboxChangeEvent) => {
        const targetName = e.target.name as keyof loginCardData
        setData({
            ...data,
            [targetName]: !data[`${targetName}`]
        })
    }

    const handleSubmit = () => {
        loginUser(data)
    }
    return (
        <GenericCard extraClasses="w-full">
            <div className='px-4 py-3 flex flex-col gap-4 w-full'>
                <TextInput extraClasses="w-full" value={data.email} type="text" onChange={handleChange} name="email" label="Email" />
                <TextInput value={data.password} type="password" onChange={handleChange} name="password" label="Password" />
                <div className={'flex flex-row justify-between items-center'}>
                    <Checkbox value={data.rememberMe} label="Remember Me" name="rememberMe" onChange={handleBooleanChange} />
                    <Button label="Login" raised onClick={handleSubmit} />
                </div>
            </div>
        </GenericCard>
    )
})



export default LoginCard;

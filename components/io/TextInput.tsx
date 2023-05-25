import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { InputText } from 'primereact/inputtext';



interface TextInputProps {
    type?: string,
    onChange: ChangeEventHandler
    name: string,
    label?: string,
    helperText?: string,
    value: string
    extraClasses?: string
}

const TextInput = (props: TextInputProps) => {
    const params = {
        id: `${props.name}-text-input`,
        ...(props.helperText && { 'aria-describedby': `${props.name}-text-input-helper` }),
        ...(props.extraClasses && { className: props.extraClasses }),
    }
    return (
        <div className={'flex flex-col gap-2'}>
            {props.label && <label htmlFor={params.id}>{props.label}</label>}
            <InputText name={props.name} type={props.type ? props.type : "text"} value={props.value} onChange={props.onChange} {...params} />
            {props.helperText && <small id={params['aria-describedby']}>
                Enter your username to reset your password.
            </small>
            }
        </div>
    )
}



export default TextInput;

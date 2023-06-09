import React, { ChangeEvent, ChangeEventHandler, FocusEventHandler, useState } from 'react'
import { InputText } from 'primereact/inputtext';



interface TextInputProps {
    type?: string,
    onChange: ChangeEventHandler
    name: string,
    label?: string,
    helperText?: string,
    value: string
    extraClasses?: string
    onFocus?: FocusEventHandler
    onBlur?: FocusEventHandler
}

const TextInput = (props: TextInputProps) => {
    const params = {
        id: `${props.name}-text-input`,
        ...(props.helperText && { 'aria-describedby': `${props.name}-text-input-helper` }),
        ...(props.extraClasses && { className: props.extraClasses }),
        ...(props.onFocus && { onFocus: props.onFocus }),
        ...(props.onBlur && { onBlur: props.onBlur })
    }
    return (
        <div className={'flex flex-col gap-2'}>
            {props.label && <label htmlFor={params.id}>{props.label}</label>}
            <InputText name={props.name} type={props.type ? props.type : "text"} value={props.value} onChange={props.onChange} {...params} />
            {props.helperText && <small id={params['aria-describedby']}>
                {props.helperText}
            </small>
            }
        </div>
    )
}



export default TextInput;

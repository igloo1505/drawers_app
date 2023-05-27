"use client"
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import store, { RootState } from '../../state/store';
import { ToastConfigType } from '../../types/UITypes';
import { Toast as PrimeToast } from 'primereact/toast';

const connector = connect((state: RootState, props: any) => ({
    toast: state.UI.toast,
    props: props
}))


interface ToastProps {
    toast: ToastConfigType
}

const Toast = connector(({ toast: {
    severity,
    content,
    timeout,
    title,
    isOpen
} }: ToastProps) => {

    const ref = useRef<PrimeToast>(null!)


    const clear = () => {
        ref.current.clear()
        store.dispatch({
            type: "SHOW_TOAST",
            payload: {
                content: "",
                title: "",
                isOpen: false,
                timeout: 0,
                severity: "info"
            }
        })
    }

    const show = () => {
        ref.current.show({ severity: severity, summary: title, detail: content });
        setTimeout(() => {
            clear()
        }, timeout || 5000)
    };

    useEffect(() => {
        console.log(severity, content, timeout, title, isOpen)
        if (isOpen) {
            return show()
        }
        clear()
    }, [isOpen])

    return (
        <PrimeToast ref={ref} />
    )
})



export default Toast;

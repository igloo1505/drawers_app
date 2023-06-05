"use client"
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import type { RootState } from '../../state/store';
import type { ToastConfigType } from '../../types/UITypes';
import { Toast as PrimeToast } from 'primereact/toast';
import { showToast } from '../../state/slices/ui';
import store from '../../state/store';

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
        store.dispatch(showToast({
            content: "",
            title: "",
            isOpen: false,
            timeout: 0,
            severity: "info"
        }))
    }

    const show = () => {
        ref.current.show({ severity: severity, summary: title, detail: content });
        setTimeout(() => {
            clear()
        }, timeout || 5000)
    };

    useEffect(() => {
        if (isOpen) {
            return show()
        }
        clear()
    }, [isOpen])

    return (
        <PrimeToast ref={ref} />
    )
})

Toast.displayName = "Toast"


export default Toast;

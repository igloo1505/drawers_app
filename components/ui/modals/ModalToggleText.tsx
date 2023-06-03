import React from 'react'
import store, { RootState } from '../../../state/store'
import clsx from 'clsx'



interface ModalToggleTextProps {
    children: string
    classes?: string
    modalName: keyof RootState['UI']['modals']
    primary?: boolean
    bold?: boolean
}

const ModalToggleText = ({ children, classes, modalName, primary, bold }: ModalToggleTextProps) => {
    const handleClick = () => {
        store.dispatch({
            type: "TOGGLE_MODAL",
            payload: modalName
        })
    }
    return (
        <a role="button" className={clsx(primary && "text-[--primary-color]", bold && "font-bold", classes && classes)} onClick={handleClick}>{children}</a>
    )
}



export default ModalToggleText;

"use client"
import React, { useState, useEffect, ChangeEventHandler } from 'react'
import { connect } from 'react-redux';
import store, { RootState } from '../../../state/store';
import { ChangeModalType } from '../../../state/types/reduxTypes';
import Button from '../../io/Button';
import { hideContentManipulationModal, showContentManipulationModal } from '../../../state/actions/developmentActions';
import { AppDataType } from '../../../state/initial/appData';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    changeModal: state.development.change_content_modal,
    props: props
}))


interface TitleTextManipulationProps {
    changeModal: ChangeModalType
    appData: AppDataType
}

const getNewAppStat = (idx: number, appData: AppDataType, val: string, subKey: string) => {
    console.log(idx, val, subKey)
    return {
        ...appData,
        appStats: {
            ...appData.appStats,
            items: appData.appStats.items.map((stat, i) => i == idx ? {
                ...stat,
                [subKey]: val
            } : stat)
        }
    }

}

const TitleTextManipulation = connector(({ changeModal: { label, value, itemIndex, isAppStat, name, parentName, isOpen, subKey }, appData }: TitleTextManipulationProps) => {
    const [localValue, setLocalValue] = useState<string>(value)

    const submitChange = (val: string, name: string, parent: keyof AppDataType | null) => {
        if (isAppStat) {
            let nd = getNewAppStat(itemIndex || 0, appData, localValue, subKey || "")
            store.dispatch({
                type: "SET_UI_APP_DATA",
                payload: nd
            })
            if (window.localStorage) {
                window.localStorage.setItem("UIAppData", JSON.stringify(nd))
            }
            return hideContentManipulationModal()
        }
        let newData;
        if (parent) {
            if (!itemIndex) {
                newData = {
                    ...appData,
                    [parent]: {
                        ...appData[parent],
                        [name]: val
                    }
                }
            }
        }
        if (!parent) {
            newData = {
                ...appData,
                [name]: val
            }
        }
        if (window.localStorage) {
            window.localStorage.setItem("UIAppData", JSON.stringify(newData))
        }
        store.dispatch({
            type: "SET_UI_APP_DATA",
            payload: newData
        })
        hideContentManipulationModal()
    }

    useEffect(() => {
        if (isOpen) {
            showContentManipulationModal()
            setLocalValue(value)
        }
        if (!isOpen) {
            if (isOpen) {
                hideContentManipulationModal()
            }
        }
    }, [isOpen])

    const handleCancel = () => {
        hideContentManipulationModal()
        setLocalValue("")
    }

    const handleSubmit = () => {
        submitChange(localValue, name, parentName)
    }

    const handleLocalChange: ChangeEventHandler = (e) => {
        let target = e.target as HTMLTextAreaElement
        console.log(target.value)
        setLocalValue(target.value)
    }

    return (
        <div className={'min-w-[400px] px-6 py-4 fixed flex flex-col z-50 shadow-lg rounded bg-[--highlight-bg]'} id="content-manipulation-modal" style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100vh)",
            transition: "all 0.3s ease-in-out"
        }}>
            <div className={'text-xl mb-2'}>
                {label || "Label here"}
            </div>
            <textarea onChange={handleLocalChange} name={name} value={localValue} className={'px-2 py-2'} />
            <div className={'mt-4 flex flex-row w-full justify-end items-center gap-4'}>
                <Button severity="warning" label="Cancel" onClick={handleCancel} />
                <Button label="Change" onClick={handleSubmit} />
            </div>
        </div>
    )
})


export default TitleTextManipulation;
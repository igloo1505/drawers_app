"use client"
import React from 'react'
import HeroContentManipulation from './contentManipulation/HeroContent';
import { connect } from 'react-redux';
import store, { RootState } from '../../state/store';
import { AppDataType } from '../../state/initial/appData';
import Button from '../io/Button';
import { resetAppData } from '../../state/actions/developmentActions';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    props: props
}))


interface SetContentSectionProps {
    appData: AppDataType
}

const SetContentSection = connector(({ appData }: SetContentSectionProps) => {
    const resetContent = () => {
        resetAppData()
    }
    const copyContent = () => {
        navigator.clipboard.writeText(JSON.stringify(appData));
        store.dispatch({
            type: "SHOW_TOAST",
            payload: {
                severity: "success",
                title: "Copied!",
                content: "Copied in the format I need. You'll have to text it to me when everything is the way you like it.",
                timeout: 5000,
                isOpen: true
            }
        })
    }
    return (
        <div>
            <HeroContentManipulation appData={appData} />
            <div className={'w-full flex flex-row justify-end items-end gap-4 mt-4'}>
                <Button severity="danger" onClick={resetContent} label="Reset to placeholder content" />
                <Button severity="info" onClick={copyContent} label="Copy Content in the format I need" />
            </div>
        </div>
    )
})



export default SetContentSection;

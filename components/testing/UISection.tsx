import React from 'react'
import ButtonDemoSection from './ButtonDemoSection'


interface DemoUISectionProps {

}

export const colors = []
export const severities = [
    "secondary",
    "success",
    "info",
    "warning",
    "help",
    "danger"
]

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className={'w-full text-4xl'}>{title}</div>
    )
}



export const SectionSubTitle = ({ title }: { title: string }) => {
    return (
        <div className={'w-full text-2xl my-2 pl-4'}>{title}</div>
    )
}

const DemoUISection = (props: DemoUISectionProps) => {
    return (
        <div>
            <SectionTitle title={"Buttons"} />
            <ButtonDemoSection sectionLabel="Colors" extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Raised" extraProps={{ raised: true }} extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Rounded" extraProps={{ rounded: true }} extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Text Only" extraProps={{ text: true }} extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Outlined" extraProps={{ outlined: true }} extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Small" extraProps={{ size: "small" }} extraWrapperClasses="mt-4" />
            <ButtonDemoSection sectionLabel="Large" extraProps={{ size: "large" }} extraWrapperClasses="mt-4" />
        </div>
    )
}



export default DemoUISection;

"use client"
import React from 'react'
import { Card } from 'primereact/card';



interface CardProps {
    title?: string,
    children: JSX.Element | JSX.Element[],
    className?: string,
    additionalParams?: object
    extraClasses?: string
}

const GenericCard = (props: CardProps) => {
    let params: { className?: string } = {}
    props.additionalParams && (params = { ...props.additionalParams })
    params['className'] = props.className || `w-fit flex flex-col ${props.extraClasses || ""}`
    return (
        <Card {...params}>{props.children}</Card>
    )
}



export default GenericCard;

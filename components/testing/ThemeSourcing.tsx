import React from 'react'
import { availableThemes } from '../../state/initial/themeTesting'


interface ThemeSourcingProps {
}

const ThemeSourcing = (props: ThemeSourcingProps) => {
    return (
        <head>
            {availableThemes.map((t) => {
                return (
                    <>
                        <link rel="stylesheet" href={`${t.lightTheme}`} media={t.original === "light" ? "" : "none"} id={t.lightId()} key={t.lightId()} />
                        {t.hasDarkTheme && (
                            <link rel="stylesheet" href={`${t.darkTheme}`} media={t.original === "dark" ? "" : "none"} id={t.darkId()} key={t.darkId()} />
                        )
                        }
                    </>
                )
            })}
        </head>
    )
}



export default ThemeSourcing;

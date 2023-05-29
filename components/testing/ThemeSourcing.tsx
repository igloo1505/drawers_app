import React from 'react'
import { availableThemes } from '../../state/initial/themeTesting'


interface ThemeSourcingProps {
}

const ThemeSourcing = (props: ThemeSourcingProps) => {
    return (
        <head>
            {availableThemes.map((t) => {
                let ids = {
                    dark: t.darkId(),
                    light: t.lightId()
                }
                return (
                    <>
                        {ids.light && <link rel="stylesheet" href={`${t.lightTheme}`} media={t.original === "light" ? "" : "none"} id={ids.light} key={ids.light} />}
                        {ids.dark && (
                            <link rel="stylesheet" href={`${t.darkTheme}`} media={t.original === "dark" ? "" : "none"} id={ids.dark} key={ids.dark} />
                        )
                        }
                    </>
                )
            })}
        </head>
    )
}



export default ThemeSourcing;

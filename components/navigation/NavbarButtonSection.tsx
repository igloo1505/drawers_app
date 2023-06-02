"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../io/Button'
import DarkModeButton from './DarkModeButton'
import { FaHamburger } from 'react-icons/fa'
import { toggleDrawer } from '../../state/actions/syncActions'

const navbarBreakpoint = 640

export interface NavbarButtonType {
    text: string,
    href: string
}

export const unAuthenticatedButtons: NavbarButtonType[] = [
    {
        text: "Sell Used",
        href: "/sellUsedPanties"
    },
    {
        text: "Buy Used",
        href: "/buyUsedPanties"
    },
    {
        text: "Login",
        href: "/login"
    },
    {
        text: "Sign Up",
        href: "/signup"
    },
]



const NavbarButton = ({ button }: { button: NavbarButtonType }) => {
    return (
        <Link href={button.href}>{button.text}</Link>
    )

}

const NavbarButtonSection = () => {
    const [viewportWidth, setViewportWidth] = useState(-1)
    const setViewport = () => {
        if (typeof window === "undefined") return;
        let w = window.innerWidth
        if (w) {
            setViewportWidth(w)
        }
    }
    useEffect(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("resize", () => {
            setViewport()
        })
        setViewport()
    }, [])
    return (
        <div className={'flex flex-row justify-end items-center gap-4'}>
            <DarkModeButton />
            {viewportWidth >= navbarBreakpoint && unAuthenticatedButtons.map((b, i) => {
                return <NavbarButton button={b} key={`navbar-button-${i}`} />
            })}
            {viewportWidth < navbarBreakpoint && viewportWidth >= 0 && <FaHamburger className={'cursor-pointer'} onClick={() => toggleDrawer()} />}
        </div>
    )
}



export default NavbarButtonSection;

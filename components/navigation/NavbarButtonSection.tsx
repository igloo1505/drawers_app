"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../io/Button'
import DarkModeButton from './DarkModeButton'
import { FiMenu } from 'react-icons/fi'
import { toggleDrawer } from '../../state/actions/syncActions'
import { roleTypes } from '../../state/types/AuthTypes'
import NavbarButton, { LogoutButton, NavbarButtonType } from './NavbarButton'

const navbarBreakpoint = 640


export const unAuthenticatedButtons: NavbarButtonType[] = [
    {
        text: "Sell Used",
        href: "/sellUsedPanties",
        authed: "both"
    },
    {
        text: "Buy Used",
        href: "/buyUsedPanties",
        authed: "both"
    },
    {
        text: "Login",
        href: "/login",
        authed: false
    },
    {
        text: "Sign Up",
        href: "/signup",
        authed: false
    },
    {
        text: "My Profile",
        href: (id: string) => `/edit/${id}/profile`,
        authed: true,
        role: "SELLER"
    },
]




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
            <LogoutButton />
            {viewportWidth < navbarBreakpoint && viewportWidth >= 0 && <FiMenu className={'cursor-pointer'} onClick={() => toggleDrawer()} />}

        </div>
    )
}



export default NavbarButtonSection;

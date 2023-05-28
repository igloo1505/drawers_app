import Link from 'next/link'
import React from 'react'
import Button from '../io/Button'
import DarkModeButton from './DarkModeButton'

interface NavbarButtonType {
    text: string,
    href: string
}

const unAthenticatedButtons: NavbarButtonType[] = [
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
    return (
        <div className={'flex flex-row justify-end items-center gap-4'}>
            <DarkModeButton />
            {unAthenticatedButtons.map((b, i) => {
                return <NavbarButton button={b} key={`navbar-button-${i}`} />
            })}
        </div>
    )
}



export default NavbarButtonSection;

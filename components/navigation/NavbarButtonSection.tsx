import Link from 'next/link'
import React from 'react'

interface NavbarButtonType {
    text: string,
    href: string
}

const unAthenticatedButtons: NavbarButtonType[] = [
    {
        text: "Sell Used xxxxxxx",
        href: "/sellUsedPanties"
    },
    {
        text: "Buy Used xxxxxxx",
        href: "/buyUsedPanties"
    },
    {
        text: "Login",
        href: "/login"
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
            {unAthenticatedButtons.map((b, i) => {
                return <NavbarButton button={b} key={`navbar-button-${i}`} />
            })}
        </div>
    )
}



export default NavbarButtonSection;

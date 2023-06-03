import React from 'react'
import { NavbarButtonType } from '../navigation/NavbarButtonSection';
import Link from 'next/link';



interface DrawerButtonProps {
    item: NavbarButtonType
}

const DrawerButton = ({ item }: DrawerButtonProps) => {
    return (
        <Link href={item.href} className={''}>{item.text}</Link>
    )
}



export default DrawerButton;

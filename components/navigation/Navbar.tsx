import React, { useEffect, useState } from 'react'
import NavbarLogoAsText from './NavbarLogoAsText';
import NavbarButtonSection from './NavbarButtonSection';
import Drawer from '../ui/Drawer';


const Navbar = () => {
    return (
        <>
            <Drawer />
            <div className={'flex flex-row justify-between items-center min-h-[4rem] px-3'}>
                <NavbarLogoAsText />
                <NavbarButtonSection />
            </div>
        </>
    )
}



export default Navbar;

import React from 'react'
import NavbarLogoAsText from './NavbarLogoAsText';
import NavbarButtonSection from './NavbarButtonSection';


const Navbar = () => {
    return (
        <div className={'flex flex-row justify-between items-center min-h-[4rem] px-3 testborder'}>
            <NavbarLogoAsText />
            <NavbarButtonSection />
        </div>
    )
}



export default Navbar;

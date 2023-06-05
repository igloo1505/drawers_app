"use client"
import 'react'
import Navbar from '../../components/navigation/Navbar'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
/* import 'primereact/resources/themes/viva-dark/theme.css'; */
/* import 'primereact/resources/themes/soho-light/theme.css'; */
import './testing.scss'
import ReduxProvider from '../../components/strucutre/redux-provider'
import HeroSection from '../../components/landing/Hero';
import ThemeSourcing from '../../components/testing/ThemeSourcing';
import TitleTextManipulation from '../../components/testing/contentManipulation/TitleTextManipulation';
import Toast from '../../components/ui/Toast';
import ThemeClientSetter from '../../components/testing/ThemeClientSetter';
/* import { availableThemes } from '../../state/initial/themeTesting' */




const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ThemeSourcing />
            <body>
                <ReduxProvider>
                    <Toast />
                    <ThemeClientSetter />
                    <TitleTextManipulation />
                    <Navbar />
                    <div className='px-4 pt-2 pb-4'>
                        {children}
                    </div>
                </ReduxProvider>
            </body>
        </html>
    )
}


export default Layout

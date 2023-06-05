"use client"
import 'react'
import Navbar from '../../components/navigation/Navbar'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
/* import 'primereact/resources/themes/viva-dark/theme.css'; */
/* import 'primereact/resources/themes/soho-light/theme.css'; */
import './landing.scss'
import ReduxProvider from '../../components/strucutre/redux-provider'
import ThemeSourcing from '../../components/testing/ThemeSourcing';
import ThemeClientSetter from '../../components/testing/ThemeClientSetter';
import Toast from '../../components/ui/Toast';
import Footer from '../../components/navigation/Footer';


const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ThemeSourcing />
            <body>
                <ReduxProvider>
                    <ThemeClientSetter />
                    <Toast />
                    <Navbar />
                    <div className='pt-2'>
                        {children}
                    </div>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    )
}


export default RootLayout

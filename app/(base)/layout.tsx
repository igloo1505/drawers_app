"use client"
import 'react'
import Navbar from '../../components/navigation/Navbar'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import ReduxProvider from '../../components/strucutre/redux-provider'
import Toast from '../../components/ui/Toast';
import Footer from '../../components/navigation/Footer';
import Modals from '../../components/ui/modals/Modals';
import ProductionThemeSourcing from '../../components/testing/ProductionThemeSourcing';


const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ProductionThemeSourcing />
            <body>
                <ReduxProvider>
                    <Modals />
                    <Toast />
                    <Navbar />
                    <div className='px-4 pt-2 pb-4' style={{
                        minHeight: "calc(100vh - 260px)"
                    }}>
                        {children}
                    </div>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    )
}


export default Layout 

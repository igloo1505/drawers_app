import 'react'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import './landing.scss'
import ProductionThemeSourcing from 'components/testing/ProductionThemeSourcing';
import WrappedNavbar from 'components/wrappedComponents/wrappedNavbar';
import WrappedFooter from 'components/wrappedComponents/wrappedFooter';
import WrappedToast from 'components/wrappedComponents/wrappedToast';



const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ProductionThemeSourcing />
            <body>
                <WrappedToast />
                <WrappedNavbar />
                <div className='pt-2'>
                    {children}
                </div>
                <WrappedFooter />
            </body>
        </html>
    )
}


export default RootLayout

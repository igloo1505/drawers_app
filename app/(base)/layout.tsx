import 'react'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import ProductionThemeSourcing from '../../components/testing/ProductionThemeSourcing';
import WrappedToast from 'components/wrappedComponents/wrappedToast';
import WrappedNavbar from 'components/wrappedComponents/wrappedNavbar';
import WrappedFooter from 'components/wrappedComponents/wrappedFooter';
import WrappedModals from 'components/wrappedComponents/wrappedModals';


const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ProductionThemeSourcing />
            <body>
                <WrappedModals />
                <WrappedToast />
                <WrappedNavbar />
                <div className='px-4 pt-2 pb-4' style={{
                    minHeight: "calc(100vh - 260px)"
                }}>
                    {children}
                </div>
                <WrappedFooter />
            </body>
        </html>
    )
}


export default Layout 

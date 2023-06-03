import 'react'
import Navbar from '../../components/navigation/Navbar'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
/* import 'primereact/resources/themes/viva-dark/theme.css'; */
/* import 'primereact/resources/themes/soho-light/theme.css'; */
import ReduxProvider from '../../components/strucutre/redux-provider'
import ThemeSourcing from '../../components/testing/ThemeSourcing';
import ThemeClientSetter from '../../components/testing/ThemeClientSetter';
import Toast from '../../components/ui/Toast';
import Footer from '../../components/navigation/Footer';
import Modals from '../../components/ui/modals/Modals';


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
                    <ThemeClientSetter />
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

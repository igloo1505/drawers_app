import 'react'
import Navbar from '../../components/navigation/Navbar'
import '../globals.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import './landing.scss'
import ReduxProvider from '../../components/strucutre/redux-provider'
import Toast from '../../components/ui/Toast';
import Footer from '../../components/navigation/Footer';
import ProductionThemeSourcing from '../../components/testing/ProductionThemeSourcing';



const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <ProductionThemeSourcing />
            <body>
                <ReduxProvider>
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

import 'react'
import Navbar from '../components/navigation/Navbar'
import './globals.css'
import 'primereact/resources/themes/viva-dark/theme.css';
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import ReduxProvider from './redux-provider'
import { Provider } from 'react-redux';
import store from '../state/store';


const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (

        <html lang="en">
            <body>
                <ReduxProvider>
                    <Navbar />
                    <div className='px-4 pt-2 pb-4'>
                        {children}
                    </div>
                </ReduxProvider>
            </body>
        </html>
    )
}


export default RootLayout

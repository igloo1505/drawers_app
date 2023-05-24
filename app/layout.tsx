import 'react'
import Navbar from '../components/navigation/Navbar'
import './globals.css'

import 'primereact/resources/themes/viva-dark/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}


export default RootLayout

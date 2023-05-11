import '../styles/globals.css'
import type { AppProps } from 'next/app'
/* import 'primereact/resources/themes/saga-blue/theme.css'; */
import 'primereact/resources/themes/viva-dark/theme.css';
/* import 'primereact/resources/primereact.min.css'; */
/* import 'primereact/resources/themes/soho-dark/' */
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Provider } from 'react-redux';
import store from '../state/store';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp

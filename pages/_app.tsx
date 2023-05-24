import type { AppProps } from 'next/app'
/* import 'primereact/resources/themes/saga-blue/theme.css'; */
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
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-toastify/dist/ReactToastify.css';
import { WalletProvider } from '@/providers/WalletProvider';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#dc143c'
        }
    }
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <WalletProvider>
                <CssBaseline/>
                <Component {...pageProps} />
                <ToastContainer/>
            </WalletProvider>
        </ThemeProvider>
    )
}

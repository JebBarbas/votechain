import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { WalletProvider } from '@/providers/WalletProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-toastify/dist/ReactToastify.css';

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
            <CssBaseline/>
            <ToastContainer/>
            
            <WalletProvider>
                <Component {...pageProps} />
            </WalletProvider>
        </ThemeProvider>
    )
}

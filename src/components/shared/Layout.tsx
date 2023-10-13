import { ReactNode } from 'react'
import Header from '../Header'
import MainContainer from '../MainContainer'
import Footer from '../Footer'
import { useWallet } from '@/providers/WalletProvider'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps){
    const { publicKey } = useWallet()

    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Header/>
            <MainContainer>{children}</MainContainer>
            {publicKey}
            <Footer/>
        </div>
    )
}
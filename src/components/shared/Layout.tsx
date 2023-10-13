import { ReactNode } from 'react'
import Header from '../Header'
import MainContainer from '../MainContainer'
import Footer from '../Footer'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps){

    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Header/>
            <MainContainer>{children}</MainContainer>
            <Footer/>
        </div>
    )
}
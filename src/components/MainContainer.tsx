import { ReactNode } from 'react'

export default function MainContainer({ children }: { children: ReactNode}){
    return (
        <main
            className='p-4 flex-1'
        >
            {children}
        </main>
    )
}
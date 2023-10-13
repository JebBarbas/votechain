import Layout from '@/components/shared/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        router.push('/create')
    }, [router])
    return (
        <Layout>Taylor Swift Fearless Speak Noow Re e e e e e eed Myreputation Loveeeeer Folkloreeee Evermoreeee Midnights</Layout>
    )
}

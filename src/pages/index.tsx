import Layout from '@/components/shared/Layout'
import { useWallet } from '@/providers/WalletProvider'
import { success, warning, error} from '@/scripts/toast'
import { Button, Container } from '@mui/material'

export default function Home() {
    const { signIn, signOut } = useWallet()
    return (
        <Layout>
            Hola Mundo

            <Button onClick={signIn}>Login</Button>
            <Button onClick={signOut}>Logout</Button>
            <Button onClick={() => error('MUY ERROR')}>Success</Button>
        </Layout>
    )
}

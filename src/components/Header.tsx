import { APP_NAME } from '@/scripts/constants'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useWallet } from '@/providers/WalletProvider'

export default function Header(){
    const { publicKey, signOut } = useWallet()

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        { APP_NAME }
                    </Typography>
                    {
                        publicKey ? <Button color="inherit" onClick={signOut}>Logout</Button> : <></>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
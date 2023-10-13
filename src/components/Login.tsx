import { Button, Typography } from "@mui/material";
import Layout from "./shared/Layout";
import ImageWithMessage from "./ImageWithMessage";
import { useWallet } from "@/providers/WalletProvider";

export default function Login(){
    const { signIn } = useWallet()
    
    return (
        <Layout>
            <ImageWithMessage
                image="/needs-auth.svg"
                message="To use this app you must be authenticated."
            />

            <div className="grid mt-10 justify-center">
                <Button variant="contained" onClick={signIn}>Log In</Button>
            </div>
        </Layout>
    )
}
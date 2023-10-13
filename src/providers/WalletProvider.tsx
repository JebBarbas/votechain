import Login from "@/components/Login";
import { error } from "@/scripts/toast";
import { createContext, ReactNode, useMemo, useEffect, useState, useContext } from "react";

type WalletContext = {
    publicKey: string | null
    signIn: () => Promise<void>
    signOut: () => Promise<void>
}

const walletContextDefaultValue:WalletContext = {
    publicKey: null,
    async signIn() {},
    async signOut() {}
}

const walletContext = createContext(walletContextDefaultValue)

export function WalletProvider({ children }: { children: ReactNode }){
    const key = useMemo(() => 'votechain-public-key', [])
    const [publicKey, setPublicKey] = useState<string|null>(null)

    async function signIn(){
        // Si phantom no está instalado
        //@ts-ignore
        const provider:any = window?.phantom?.solana 
        //@ts-ignore
        const solana:any = window?.solana

        if(!provider?.isPhantom || !solana.isPhantom){
            error('Phantom no está instalado')
            open("https://phantom.app/", "_blank")
            return
        }

        // Si phantom está instalado
        let phantom:any

        if(provider?.isPhantom)
            phantom = provider

        const result = await phantom.connect()
        const innerPublicKey = result.publicKey.toString()

        setPublicKey(innerPublicKey)
        localStorage.setItem(key, innerPublicKey)
    }

    async function signOut(){
        if (window) {
            //@ts-ignore
            const { solana } = window;
            setPublicKey(null);

            solana.disconnect();
            localStorage.removeItem(key)
        }
    }

    const value:WalletContext = {
        publicKey,
        signIn,
        signOut,
    }

    useEffect(() => {
        try{
            const maybeVal = localStorage.getItem(key)
            if(!maybeVal) return

            setPublicKey(maybeVal)
        }
        catch(e){
            console.log(e)
        }
    }, [key])

    return (
        <walletContext.Provider value={value}>
            {
                publicKey ? <>{children}</> : <Login/>
            }
        </walletContext.Provider>
    )
}

export const useWallet = () => useContext(walletContext)
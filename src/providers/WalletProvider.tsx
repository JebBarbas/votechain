import useLocalStorage from "@/hooks/useLocalStorage";
import { error } from "@/scripts/toast";
import { createContext, ReactNode, useEffect, useState, useContext } from "react";

type WalletContext = {
    publicKey: string
    signIn: () => Promise<void>
    signOut: () => Promise<void>
}

const walletContextDefaultValue:WalletContext = {
    publicKey: '',
    async signIn() {},
    async signOut() {}
}

const walletContext = createContext(walletContextDefaultValue)

export function WalletProvider({ children }: { children: ReactNode }){
    const [publicKey, setPublicKey] = useLocalStorage<string|null>('votechain-public-key', '')

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

        setPublicKey(innerPublicKey.toString())
    }

    async function signOut(){
        if (window) {
            //@ts-ignore
            const { solana } = window;
            setPublicKey(null);
            solana.disconnect();
        }
    }

    if(!publicKey) return (
        <div>Loading</div>
    )

    const value:WalletContext = {
        publicKey,
        signIn,
        signOut,
    }

    return (
        <walletContext.Provider value={value}>
            {children}
        </walletContext.Provider>
    )
}

export const useWallet = () => useContext(walletContext)
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T){
    const [value, setValue] = useState(defaultValue)

    const updateValue = (newValue:T) => {
        if(localStorage){
            try{
                localStorage.setItem(key, JSON.stringify(newValue))
                setValue(newValue)
            }
            catch{}
        }
    }

    useEffect(() => {
        if(localStorage){
            try{
                const maybeVal = localStorage.getItem(key)
                if(maybeVal === null) return
    
                const parsed = JSON.parse(maybeVal)
                setValue(parsed)
            }
            catch{}
        }
    }, [key])

    return [value, updateValue] as const
}
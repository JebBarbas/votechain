import CreateCandidate from "@/components/CreateCandidate";
import Layout from "@/components/shared/Layout";
import { error, success } from "@/scripts/toast";
import { Button, FormControl, FormLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useRouter } from "next/router";

export default function Create(){
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [participants, setParticipants] = useState<number|null>(0)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [slug, setSlug] = useState('')

    const [vals1, setVals1] = useState<[string, string, string, string, string]>(['', '', '', '', ''])
    const [vals2, setVals2] = useState<[string, string, string, string, string]>(['', '', '', '', ''])
    const [vals3, setVals3] = useState<[string, string, string, string, string]>(['', '', '', '', ''])
    const [vals4, setVals4] = useState<[string, string, string, string, string]>(['', '', '', '', ''])

    const sendCreate = async () => {
        // TODO: Funcion para la transaccion

        const possibleCandidates = [vals1, vals2, vals3, vals4].filter(vals => vals.every(val => val !== ''))

        if(possibleCandidates.length === 0) throw new Error(`You don't have valid candidates`)
        
        await axios.post('/api/voting-event', {
            name,
            slug,
            description,
            candidates: possibleCandidates
        })
    }
    
    const handleOnCreate = async () => {
        try{
            setLoading(true)

            if(name === '') throw new Error('Please write the name')
            if(slug === '') throw new Error('Please write the slug')
            if(description === '') throw new Error('Please write the description')

            if(!(vals1.every(val => val === '') || vals1.every(val => val !== ''))){
                throw new Error('Please write the data of you first candidate')
            }

            if(!(vals2.every(val => val === '') || vals2.every(val => val !== ''))){
                throw new Error('Please write the data of you second candidate')
            }

            if(!(vals3.every(val => val === '') || vals3.every(val => val !== ''))){
                throw new Error('Please write the data of you third candidate')
            }

            if(!(vals4.every(val => val === '') || vals4.every(val => val !== ''))){
                throw new Error('Please write the data of you fourth candidate')
            }

            await sendCreate()

            success('Evento creado exitosamente')
            router.push(`/vote/itt/${slug}`)
        }
        catch(e){
            //@ts-ignore
            error(e.toString())
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <Layout>
            <Typography variant="h5" gutterBottom>
                Configure your voting event
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <FormControl fullWidth>
                    <FormLabel>Name of the voting event</FormLabel>
                    <TextField placeholder="Name of the voting event" variant="outlined" value={name} onChange={e => setName(e.target.value)}/>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel>Slug of the voting event</FormLabel>
                    <TextField placeholder="Slug of the voting event" variant="outlined" value={slug} onChange={e => setSlug(e.target.value)}/>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel>Description of the voting event</FormLabel>
                    <TextField multiline placeholder="Description of the voting event" variant="outlined" value={description} onChange={e => setDescription(e.target.value)}/>
                </FormControl>
            </div>

            <Typography variant="h5" gutterBottom>
                Configure your candidates
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
                <CreateCandidate vals={vals1} setVals={setVals1}/>
                <CreateCandidate vals={vals2} setVals={setVals2}/>
                <CreateCandidate vals={vals3} setVals={setVals3}/>
                <CreateCandidate vals={vals4} setVals={setVals4}/>
            </div>

            <Typography variant="h5" gutterBottom>
                Select Price and Participants
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                <FormControl fullWidth>
                    <FormLabel>Approximate number of participants</FormLabel>
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" placeholder="Approximate number of participants" variant="outlined" value={participants} 
                        onChange={e => setParticipants(
                            isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                        )}
                    />
                </FormControl>

                <div className="flex justify-center items-center gap-4 mt-3">
                    <img src="/billete-de-banco.png" alt="Billete de Banco" height={50}/>
                    <Typography variant="h6">
                        {~~((participants ?? 0) / 50) + 1}
                    </Typography>
                </div>

            </div>

            <div className="grid mt-10">
                <LoadingButton variant="contained" loading={loading} onClick={handleOnCreate}>Create voting event</LoadingButton>
            </div>
        </Layout>
    )
}
'use client'

import Candidates from "@/components/Candidates"
import YouVoted from "@/components/YouVoted"
import { Container, Typography } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"
import { useState, useEffect, useCallback } from 'react'

export default function VotePage(){
    const [candidates, setCandidates] = useState<any[]>([])
    const [event, setEvent] = useState<any>(null)
    const [voted, setVoted] = useState(false)

    const router = useRouter()
    const { organizationID, votationID } = router.query
    
    const fetchCandidates = useCallback(async () => {
        if(votationID){
            const candidates = await axios.get(`/api/candidate/${votationID}`)
            setCandidates(candidates.data)
        }
    }, [votationID])

    const fetchEvent = useCallback(async () => {
        if(votationID){
            const event = await axios.get(`/api/voting-event/${votationID}`)
            setEvent(event.data[0])
        }
    }, [votationID])

    useEffect(() => {
        fetchEvent()
        fetchCandidates()
    }, [fetchEvent, fetchCandidates])

    if(voted) return (
        <YouVoted/>
    )

    return (
        <Container 
            className="py-4 min-h-screen grid place-content-center"
        >
            <Typography variant="h4">
                {event?.name}
            </Typography>
            <Typography variant="h5" gutterBottom color="text.secondary">
                ITT
            </Typography>
            <Typography gutterBottom>
                {event?.description}
            </Typography>
            <Candidates candidates={candidates} setVoted={setVoted}/>
        </Container>
    )
}
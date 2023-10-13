import Candidates from "@/components/Candidates"
import YouVoted from "@/components/YouVoted"
import { CandidateType, OrganizationType, VotingEventType } from "@/types"
import { Chip, Container, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from 'react'

const candidates:CandidateType[] = [
    {
        id: 1,
        name: 'Red',
        tinyDescription: 'Cuarto album de Taylor Swift',
        longDescription: 'Contiene canciones como Red y All Too Well (10 Minute Version), representa su etapa de relación con Jake Gyllenhaal',
        photoURL: 'https://i.pinimg.com/564x/49/15/d4/4915d4d52c40e9d43abe11b875021e90.jpg'
    },
    {
        id: 2,
        name: '1989',
        tinyDescription: 'Quinto album de Taylor Swift',
        longDescription: 'Contiene canciones como Style, New Romantics y Wildest Dreams, es conocido como el mejor momento de su historia musical',
        photoURL: 'https://i.pinimg.com/564x/ff/83/55/ff83553505aff84dfdf83846ff80c4e7.jpg'
    },
    {
        id: 3,
        name: 'reputation',
        tinyDescription: 'Sexto album de Taylor Swift',
        longDescription: 'Este album es con el que volvió de la muerte después de ser funada debido a las controversias con el Ye. También representa la etapa de amor temprano con su ex pareja Joe Alwyn',
        photoURL: 'https://i.pinimg.com/564x/14/7a/fb/147afb0f8b87da43a64762d2885bb82f.jpg'
    },
    {
        id: 4,
        name: 'Lover',
        tinyDescription: 'Septimo album de Taylor Swift y primero de su propiedad',
        longDescription: 'Representa el amor maduro y dorado que tuvo con su ex pareja Joe Alwyn',
        photoURL: 'https://i.pinimg.com/564x/b3/40/38/b3403839c72e2cbd56a0056a96be117a.jpg'
    }
]


const votingEvent:VotingEventType = {
    id: 1,
    name: 'Mejor Album 2024',
    slug: 'mejor-album-2024',
    description: 'Vota por tu album favorito de Taylor Swift en este 2024',
    candidates
}

const organization:OrganizationType = {
    id: 1,
    name: 'Taylor Nation',
    slug: 'taylornation',

    votingEvent: [votingEvent]
}

export default function VotePage(){
    const [voted, setVoted] = useState(false)

    const router = useRouter()
    const { organizationID, votationID } = router.query
    
    if(voted) return (
        <YouVoted/>
    )

    return (
        <Container 
            className="py-4 min-h-screen grid place-content-center"
        >
            <Typography variant="h4">
                {votingEvent.name}
            </Typography>
            <Typography variant="h5" gutterBottom color="text.secondary">
                {organization.name}
            </Typography>
            <Typography gutterBottom>
                {votingEvent.description}
            </Typography>
            <Candidates candidates={candidates} setVoted={setVoted}/>
        </Container>
    )
}
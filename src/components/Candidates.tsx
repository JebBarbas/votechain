import { CandidateType } from "@/types";
import Candidate from "./Candidate";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from 'react'

type SetVoted = Dispatch<SetStateAction<boolean>>

export default function Candidates({ candidates, setVoted }: { candidates: CandidateType[], setVoted: SetVoted }){
    return (
        <Box className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                candidates.map(candidate => <Candidate key={candidate.id} candidate={candidate} setVoted={setVoted}/>)
            }
        </Box>
    )
}
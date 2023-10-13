export type OrganizationType = {
    id: number
    name: string
    slug: string

    votingEvent: VotingEventType[]
}

export type VotingEventType = {
    id: number
    name: string
    slug: string
    description: string
    
    candidates: CandidateType[]
}

export type CandidateType = {
    id: number
    name: string
    tinyDescription: string 
    longDescription: string
    photoURL: string
}
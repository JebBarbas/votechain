import Candidate from "../models/Candidate";
import VoteEvent from "../models/VoteEvent";

export default async function getCandidates(slug: string){
    const VotingEvent = await VoteEvent.find({
        slug
    }).limit(1)
    
    if(VotingEvent.length === 0) throw new Error(':(')

    return Candidate.find({
        VoteEvent: VotingEvent[0]._id
    })
}
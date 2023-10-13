import VoteEvent from "../models/VoteEvent";

export default async function getVotingEvent(slug: string){
    return VoteEvent.find({
        slug
    }).limit(1)
}
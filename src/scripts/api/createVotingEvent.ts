import VoteEvent from '@/scripts/models/VoteEvent'

type CreateVotingEventProps = {
    name: string
    slug: string
    description: string
}

export default async function createVotingEvent({ name, slug, description }:CreateVotingEventProps){
    await VoteEvent.create({
        name, slug, description
    })

    const lastVoteEvent = (await VoteEvent.find().sort({ _id: -1}).limit(1))[0]
    return lastVoteEvent._id
}
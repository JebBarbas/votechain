import { NextApiRequest, NextApiResponse } from "next";
import getVotingEvent from "@/scripts/api/getVotingEvent";
import getCandidates from "@/scripts/api/getCandidates";

export default async function index(req: NextApiRequest, res: NextApiResponse){
    const { method, body, query } = req
    const votingSlug = query.votingSlug ? (Array.isArray(query.votingSlug) ? query.votingSlug.join('/') : query.votingSlug) : ''

    switch(method){
        case 'GET': {
            try{
                const candidates = await getCandidates(votingSlug)
                if(!candidates) return res.status(404).json(null)

                return res.status(200).json(candidates)
            }
            catch(err){
                console.log(err)
                return res.status(500).json({message: err})
            }
        }

        default: {
            return res.status(400).json({message: 'Método no disponible'})
        }

    }
}
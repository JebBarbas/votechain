import { NextApiRequest, NextApiResponse } from "next";
import getVotingEvent from "@/scripts/api/getVotingEvent";

export default async function index(req: NextApiRequest, res: NextApiResponse){
    const { method, body, query } = req
    const slug = query.slug ? (Array.isArray(query.slug) ? query.slug.join('/') : query.slug) : ''

    switch(method){
        case 'GET': {
            try{
                const votingEvent = await getVotingEvent(slug)
                
                if(!votingEvent) return res.status(404).json(null)

                return res.status(200).json(votingEvent)
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
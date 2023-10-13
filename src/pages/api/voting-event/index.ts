import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "@/scripts/MongoConnect";
import createVotingEvent from "@/scripts/api/createVotingEvent";
import createCandidates from "@/scripts/api/createCandidates";

export default async function index(req: NextApiRequest, res: NextApiResponse){
    const { method, body, query } = req
    const { name, slug, description, candidates} = body

    switch(method){
        case 'POST': {
            try{
                await connectMongoDB()
                const id = await createVotingEvent({
                    name, slug, description
                })

                await createCandidates(candidates, id)
                
                return res.status(200).json({message: 'OK'})
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
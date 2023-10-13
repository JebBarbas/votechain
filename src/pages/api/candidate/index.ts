import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "@/scripts/MongoConnect";
//import createVotingEvent from "@/scripts/api/createVotingEvent";

export default async function index(req: NextApiRequest, res: NextApiResponse){
    const { method, body, query } = req
    const { candidates } = body

    switch(method){
        case 'POST': {
            try{
                console.log(candidates)
                
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
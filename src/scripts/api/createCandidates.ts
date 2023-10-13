import { connectMongoDB } from "../MongoConnect"
import Candidate from "../models/Candidate"

export default async function createCandidates(candidates: [string, string, string, string, string][], id:any){
    await connectMongoDB()
    const convertedCandidates = candidates.map(c => ({
        name: c[0],
        slug: c[1],
        tinyDescription: c[2],
        longDescription: c[3],
        photoURL: c[4],
        VoteEvent: id
    })) 

    await Candidate.insertMany(convertedCandidates)
}
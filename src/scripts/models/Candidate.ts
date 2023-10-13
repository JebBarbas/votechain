import { Schema, model, models, Types} from "mongoose";

const CandidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    tinyDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true
    },

    VoteEvent: {type: Types.ObjectId, ref: "VoteEvent"}

})

const Candidate = models.Candidate || model('Candidate', CandidateSchema)

export default Candidate
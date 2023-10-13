import { Schema, model, models, Types} from "mongoose";

const VoteSchema = new Schema({
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

    Candidate: {type: Types.ObjectId, ref: "Candidate"},
    VoteEvent: {type: Types.ObjectId, ref: "VoteEvent"}

})

const Vote = models.Vote || model('Vote', VoteSchema)

Vote
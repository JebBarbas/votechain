import { Schema, model, models, Types } from "mongoose";

const VoteEventoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Organization: {type: Types.ObjectId, ref: "Organization"}
})

const VoteEvent = models.VoteEvent || model('VoteEvent', VoteEventoSchema)

export default VoteEvent 
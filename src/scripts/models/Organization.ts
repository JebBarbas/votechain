import { Schema, model, models} from "mongoose";

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    }
    
})

const Organization = models.Organization || model('Organization', organizationSchema)

export default Organization 

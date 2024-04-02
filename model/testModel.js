import mongoose from "mongoose"

const testSchema = mongoose.Schema(
    {
        title: {
            type: String, 
            required: true, 
        }, 
        name: {
            type: String, 
            required: true, 
        }, 
        age: {
            type: String, 
            required: true, 
        }, 
    }, 
    {
        timestamp: true,
    }
)

export const TEST = mongoose.model('tField', testSchema)
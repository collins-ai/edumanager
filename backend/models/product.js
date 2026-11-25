import { Schema, model } from "mongoose"

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        oldPrice: {
            type: Number,
            required: true,
            min: 0
        },
        newPrice: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
)

export default model(`Product`, productSchema)
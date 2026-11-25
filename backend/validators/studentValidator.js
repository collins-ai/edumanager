import Joi from "joi"

const studentSchema = Joi.object({
    title: Joi.string()
        .required(),

    image: Joi.string()
        .required(),

    category: Joi.string()
        .required(),

    oldPrice: Joi.number()
        .min(0)
        .positive()
        .required(),

    newPrice: Joi.number()
        .min(0)
        .positive()
        .required(),
})

export default studentSchema
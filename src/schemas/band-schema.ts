import Joi from 'joi'

const bandSchema = Joi.object({
  about: Joi.string().required().messages({
    'any.required': 'about field is required',
    'string.base': 'about field should be string',
  }),
})

export default bandSchema

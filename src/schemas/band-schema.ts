import Joi from 'joi'

const bandSchema = Joi.object({
  about: Joi.string()
    .required()
    .min(10)
    .pattern(new RegExp(/^[0-9ა-ჰ.:,!?"-\s]*$/))
    .messages({
      'any.required': 'about field is required',
      'string.base': 'about field should be string',
      'string.min': 'about field should be at least 10 characters long',
      'string.pattern.base':
        'about should only contain georgian language characters',
    }),
})

export default bandSchema

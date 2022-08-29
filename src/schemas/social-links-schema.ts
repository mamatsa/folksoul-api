import Joi from 'joi'

const socialLinkSchema = Joi.object({
  name: Joi.string().required().min(2).messages({
    'any.required': 'name field is required',
    'string.base': 'name field should be string',
    'string.min': 'name field should be at least 2 characters long',
  }),
  link: Joi.string().required().uri().messages({
    'any.required': 'link field is required',
    'string.base': 'link field should be string',
    'string.uri': 'link should be a valid uri',
  }),
})

export default socialLinkSchema

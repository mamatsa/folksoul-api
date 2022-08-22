import Joi from 'joi'

const bandMemberSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .pattern(new RegExp('^[ა-ჰ]*$'))
    .messages({
      'any.required': 'name field is required',
      'string.base': 'name field should be string',
      'string.min': 'name field should be at least 3 characters long',
      'string.pattern.base':
        'name should only contain georgian language characters',
    }),
  instrument: Joi.string()
    .required()
    .min(2)
    .pattern(new RegExp('^[ა-ჰ]*$'))
    .messages({
      'any.required': 'instrument field is required',
      'string.base': 'instrument field should be string',
      'string.min': 'instrument field should be at least 2 characters long',
      'string.pattern.base':
        'instrument should only contain georgian language characters',
    }),
  orbitWidth: Joi.number().required().messages({
    'any.required': 'orbitWidth field is required',
    'number.base': 'orbitWidth field should be number',
  }),
  color: Joi.string()
    .required()
    .pattern(new RegExp('^#([A-F0-9]{6})$'))
    .messages({
      'any.required': 'color field is required',
      'string.base': 'color field should be string',
      'string.pattern.base':
        'color field should be in upper case full hex format',
    }),
  bio: Joi.string().required().pattern(new RegExp('^[ა-ჰ]*$')).messages({
    'any.required': 'bio field is required',
    'string.base': 'bio field should be string',
    'string.pattern.base':
      'bio should only contain georgian language characters',
  }),
})

export default bandMemberSchema

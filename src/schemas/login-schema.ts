import Joi from 'joi'

const loginSchema = Joi.object({
  nickname: Joi.string()
    .required()
    .min(3)
    .pattern(new RegExp('^[a-z0-9]*$'))
    .messages({
      'any.required': 'nickname field is required',
      'string.base': 'nickname field should be string',
      'string.min': 'nickname field should be at least 3 characters long',
      'string.pattern.base':
        'nickname should contain only alphanumeric lower case characters',
    }),
  password: Joi.string().required().min(3).messages({
    'any.required': 'password field is required',
    'string.base': 'password field should be string',
    'string.min': 'password field should be at least 3 characters long',
  }),
})

export default loginSchema

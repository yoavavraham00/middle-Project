const Joi = require('joi');

// Define a validation schema for user registration
const registerValidation = (user) => {
  const schema = Joi.object({
    name: Joi.object({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256).allow(''),
      last: Joi.string().min(2).max(256).required(),
    }).required(),

    phone: Joi.string()
      .pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
      .message('Phone must be a valid phone number')
      .required(),

    email: Joi.string()
      .email()
      .message('Email must be a valid email address')
      .required(),

    password: Joi.string()
      .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*-]).{8,}$/)
      .message('Password must meet the specified criteria')
      .required(),

    image: Joi.object({
      url: Joi.string()
        .uri({ scheme: ['http', 'https'] })
        .message('Image URL must be a valid URL')
        .allow(''),
      alt: Joi.string().min(2).max(256).allow(''),
    }).required(),

    address: Joi.object({
      state: Joi.string().allow(''),
      country: Joi.string().required(),
      city: Joi.string().required(),
      street: Joi.string().required(),
      houseNumber: Joi.number().required(),
      zip: Joi.number().allow(null), // Allow null or a number for zip
    }).required(),

    isBusiness: Joi.boolean().required(),
    isAdmin: Joi.boolean().allow(''),
  });

  return schema.validate(user);
};

module.exports = { registerValidation };


import Joi from "joi";

const loginValidation = Joi.object({
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().required().label("Password"),
});

const registerValidation = Joi.object({
  full_name: Joi.string().required().label("Full Name"),
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().required().label("Password"),
  confirm_password: Joi.string().valid(Joi.ref("password")).label("Confirm Password").messages({
    "string.valid": "Confirm password did'n match",
  }),
});

export { loginValidation, registerValidation };

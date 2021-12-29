const Joi = require("joi");

const createSchema = Joi.object({
  firstName: Joi.string().required(),

  lastName: Joi.string().required(),

  password: Joi.string().min(6).required(),

  cpassword: Joi.string().min(6).required().valid(Joi.ref("password")),

  email: Joi.string().email().required(),

  verifyUrl: Joi.string().uri().required(),
});

const createValidator = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    console.log("createAdminValidator", err);
    return res.status(400).json({
      message: "Please handle these validation errors",
      errors: err.details.map((e) => e.message),
    });
  }
};

const verifySchema = Joi.object({
  token: Joi.string().required(),
});

const verifyValidator = async (req, res, next) => {
  try {
    await verifySchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    console.log("verifyAdminValidator", err);
    return res.status(400).json({
      message: "Please handle these validation errors",
      errors: err.details.map((e) => e.message),
    });
  }
};

const loginSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),
});

const loginValidator = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    console.log("loginAdminValidator", err);
    return res.status(400).json({
      message: "Please handle these validation errors",
      errors: err.details.map((e) => e.message),
    });
  }
};

module.exports = {
  createValidator,
  verifyValidator,
  loginValidator,
};

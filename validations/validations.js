const Joi = require("joi");

module.exports.userValidation = new Joi.object({
    name: Joi.string().min(3).max(24).required(),
    age: Joi.number().min(10).max(54).required(),
    referal: Joi.number().min(1).max(5).required()
});

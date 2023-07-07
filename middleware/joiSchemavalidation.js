const Joi = require("@hapi/joi");
const { schema } = require("@hapi/joi/lib/types/object");
const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};
module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    let response = {};
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      response.status = 400;
      response.message = "Invalid Fields";
      return res.status(response.status).send(response);
    }
    return next();
  };
};

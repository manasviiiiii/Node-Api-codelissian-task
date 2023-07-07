const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  let response = {};

  try {
    if (!req.headers.authorization) {
      throw new Error("Token Missing");
    }

    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decoded = jwt.verify(token, process.env.secret_key || "mysecretkey");
    console.log(decoded);
    return next();
  } catch (error) {
    console.log("Error", error);
    response.message = error.message;
    response.status = 401;
  }
  return res.status(response.status).send(response);
};

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const userController = require("../controller/userController");
const joiSchemaValidation = require("../middleware/joiSchemavalidation");
const userSchema = require("../apiSchema/userSchema");

router.post(
  "/signup",
  bodyParser.json(),
  joiSchemaValidation.validateBody(userSchema.signup),
  userController.signup
);
router.post(
  "/login",
  bodyParser.json(),
  joiSchemaValidation.validateBody(userSchema.login),
  userController.login
);

module.exports = router;

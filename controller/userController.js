const userService = require("../Service/userService");

module.exports.signup = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await userService.signup(req.body);
    response.status = 200;
    response.message = "Sign Up Success";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};
module.exports.login = async (req, res) => {
  let response = {};
  try {
    const responsefromService = await userService.login(req.body);
    response.status = 200;
    response.message = "LogIn Successful";
    response.body = responsefromService;
  } catch (error) {
    console.log(`Something Went Wrong`, error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }
  return res.status(response.status).send(response);
};

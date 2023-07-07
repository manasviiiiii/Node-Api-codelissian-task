const User = require("../database/model/userModel");
const bcrypt = require("bcrypt");
const { formatMongoData } = require("../helper/dbhelper");
const jwt = require("jsonwebtoken");

module.exports.signup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists with this EmailId");
    }
    password = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};
module.exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Incorrect Password");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.secret_key || "mysecretkey",
      { expiresIn: "1d" }
    );
    return { token };
  } catch (error) {
    console.log(`Something went wrong`, error);
    throw new Error(error);
  }
};

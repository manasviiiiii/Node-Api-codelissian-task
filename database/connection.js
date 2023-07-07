const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Db connected successfully`);
  } catch (error) {
    console.log(`Database connection error`);
    throw new Error(error);
  }
};

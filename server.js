const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./database/connection");
dotEnv.config();
const app = express();
dbConnect();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use("/api/v1/product", require("./Routes/productRoutes"));
app.use("/api/v1/user", require("./Routes/userRoutes"));
app.get("/", (req, res, next) => {
  res.send("Hello, from node!");
});
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});

require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");

const connectdb = require("./utils/db");

const router = require("./router/auth-router");

app.use(express.json());

app.use(cors());

app.use("/api/auth", router);

PORT = 5000;

// connectdb().then(() => {
//   app.listen(PORT);
// });

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("server listening u ");
  });
});

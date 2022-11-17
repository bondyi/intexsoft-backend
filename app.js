require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/router");

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/api", router);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));

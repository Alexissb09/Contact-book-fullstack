require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

const dbConnect = require("./configs/database");
const routes = require("./routes/routes");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("sv listen on port", port);
});

dbConnect();

app.use("/users", routes);

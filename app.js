const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");


const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);


app.listen(port, () => {
  console.log("Server is running at localhost :", port);
})
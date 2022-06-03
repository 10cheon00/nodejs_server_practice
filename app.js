const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.use((req, res) => {
  res.on("finish", () => {
    console.log(new Date().toLocaleString(), res.statusCode, req.path);
  });
});


app.listen(port, () => {
  console.log("Server is running at localhost :", port);
})
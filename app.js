const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");

require("./auth");
const routes = require("./routes/index");


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "1",
  cookie: {
    maxAge: 1000 // 이 시간이 지나면 구글 로그인을 다시 시도해야함.
  },
  resave: true,
  store: new MySQLStore({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "nodejs_db"
  }),
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
app.use("/", (req, res) => {
  res.json("Hello World!");
})
app.use((req, res) => {
  res.status(404).send("404 Not Found. your path is " + req.path);
})

app.listen(port, () => {
  console.log("Server is running at localhost :", port);
})
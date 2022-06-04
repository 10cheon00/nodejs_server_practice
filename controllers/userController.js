const connection = require("../mysql");
const User = require("../models/user");


const getAllUser = (req, res, next) => {
  User.findAll((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
  next();
};

const getUser = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
  next();
}

const createUser = (req, res, next) => {
  connection.query(`INSERT INTO User (name, email) VALUES(?, ?);`, [req.body.name, req.body.email], (err, result, fields) => {
    if (err) {
      res.json(err);
    }
    res.json(result);
  });
  next();
}

module.exports = {
  getAllUser,
  getUser,
  createUser
}
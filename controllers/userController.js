const connection = require("../mysql");


const getAllUser = (req, res, next) => {
  connection.query("SELECT * FROM User;", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
  next();
};

const getUser = (req, res, next) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM User WHERE id=${id}`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
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
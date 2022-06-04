const connection = require("../mysql")

const User = (user) => {
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
}

User.findAll = (result) => {
  connection.query("SELECT * FROM User;", (err, res) => {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
}

User.findById = (id, result) => {
  connection.query("SELECT * FROM User WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  })
}

module.exports = User;
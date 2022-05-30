// must get data from mysql.

const getAllUser = (req, res) => {
  res.json("adfadsf");
};

const getUser = (req, res) => {
  res.send("id parameter is " + req.params.id + "\nquery string is asdf : " + req.query.asdf);
}

// etc http method handler codes

module.exports = {
  getAllUser,
  getUser
}
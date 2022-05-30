// must get data from mysql.

const getAllUser = (req, res) => {
  res.json("adfadsf");
};

const getUser = (req, res) => {
  res.send("id parameter is " + req.params.id);
}

// etc http method handler codes

module.exports = {
  getAllUser,
  getUser
}
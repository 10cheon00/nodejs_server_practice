// must get data from mysql.

const getAllUser = (req, res) => {
  res.json("adfadsf");
};

const createUser = (req, res) => {
  //create user
  res.status(200).json({ "id": 1, "name": "asdfadf" });
}

// etc http method handler codes

module.exports = {
  getAllUser,
  createUser
}
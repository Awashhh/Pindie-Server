const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  console.log(req.usersArray)
  next();
}

module.exports = findAllUsers
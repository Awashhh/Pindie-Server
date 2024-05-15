const usersRouter = require('express').Router()

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require('../middlewares/users')
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users')
const { checkAuth } = require('../middlewares/auth')

usersRouter
  .get('/users', findAllUsers, sendAllUsers)
  .get('/users/:id', findUserById, sendUserById)
  .post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, createUser, sendUserCreated)
  .put('/users/:id', findAllUsers, checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated)
  .delete('/users/:id', checkAuth, deleteUser, sendUserDeleted)
  .get('/me', sendMe)

module.exports = usersRouter

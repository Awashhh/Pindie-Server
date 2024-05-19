const usersRouter = require('express').Router()

const {
	findAllUsers,
	createUser,
	findUserById,
	updateUser,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
	checkIsUserExists,
	hashPassword,
} = require('../middlewares/users')
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users')
const { checkAuth } = require('../middlewares/auth')

usersRouter
  .get('/users', findAllUsers, sendAllUsers)
  .get('/users/:id', findUserById, sendUserById)
  .post('/users',
	 findAllUsers,
	 checkEmptyNameAndEmailAndPassword,
	 checkAuth, 
	 hashPassword, 
	 createUser, 
	 sendUserCreated
	)
  .put('/users/:id', checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated)
  .delete('/users/:id', checkAuth, deleteUser, sendUserDeleted)
  .get('/me', checkAuth, sendMe)

module.exports = usersRouter

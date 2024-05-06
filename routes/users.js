// Создаём роут для запросов категорий
const usersRouter = require('express').Router()

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require('../middlewares/users')
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users')

// Обрабатываем GET-запрос с роутом '/categories'
usersRouter
  .get('/users', findAllUsers, sendAllUsers)
  .get('/users/:id', findUserById, sendUserById)
  .post('/users', findAllUsers, checkEmptyNameAndEmailAndPassword, createUser, sendUserCreated)
  .put('/users/:id', findAllUsers, checkEmptyNameAndEmail ,updateUser, sendUserUpdated)
  .delete('/users/:id', deleteUser, sendUserDeleted)

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter

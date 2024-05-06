const gamesRouter = require('express').Router()

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require('../middlewares/games')
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted  } = require('../controllers/games')

gamesRouter
  .get('/games', findAllGames, sendAllGames)
  .get('/games/:id', findGameById, sendGameById)
  .post('/games', findAllGames, checkEmptyFields, checkIsGameExists, createGame, sendGameCreated)
  .put('/games/:id', findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated)
  .delete('/games/:id', deleteGame, sendGameDeleted)

module.exports = gamesRouter

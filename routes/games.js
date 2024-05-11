const gamesRouter = require('express').Router()

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games')
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted  } = require('../controllers/games')
const { checkAuth } = require('../middlewares/auth')

gamesRouter
  .get('/games', findAllGames, sendAllGames)
  .get('/games/:id', findGameById, sendGameById)
  .post('/games', findAllGames, checkEmptyFields, checkIsGameExists, checkAuth, createGame, sendGameCreated)
  .put('/games/:id', findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated)
  .delete('/games/:id', checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter

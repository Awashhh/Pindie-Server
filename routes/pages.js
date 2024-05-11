const pagesRouter = require("express").Router()
const { sendIndex, sendDashboard } = require('../controllers/auth')
const { checkAuth, checkCookiesJWT } = require('../middlewares/auth')

pagesRouter
  .get('/', sendIndex)
  .get('/admin/**', checkCookiesJWT, checkAuth, sendDashboard)
module.exports = pagesRouter
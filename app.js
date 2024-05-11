const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const apiRouter = require('./routes/apiRouter')
const cookieParser = require('cookie-parser')
const pagesRouter = require('./routes/pages')

connectToDatabase()

const PORT = 3001
const app = express()

app.use(
	cors,
	cookieParser(),
	bodyParser.json(),
	pagesRouter,
	apiRouter,
	express.static(path.join(__dirname, 'public'))
)

app.listen(PORT, () => {
	console.log(`Server is running at PORT http://localhost:${PORT}`)
})

module.exports = { PORT }
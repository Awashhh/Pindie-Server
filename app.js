const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const apiRouter = require('./routes/apiRouter')
connectToDatabase()

const PORT = 3000
const app = express()

app.use(
	cors,
	bodyParser.json(),
	express.static(path.join(__dirname, 'public')),
	apiRouter
)

app.listen(PORT, () => {
	console.log(`Server is running at PORT http://localhost:${PORT}`)
})

module.exports = { PORT }
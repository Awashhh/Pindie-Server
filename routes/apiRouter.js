const categoriesRouter = require('./categories');
const gamesRouter = require('./games');
const usersRouter = require('./users');
const apiRouter = require('express').Router()

apiRouter.use('/api', gamesRouter)
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);

module.exports = apiRouter
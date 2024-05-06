const { PORT } = require('../app')
const allowedCors = [
  `localhost${PORT}`
]

const cors = (req, res, next) => {
  const { origin } = req.headers
  if (allowedCors.includes(origin)) {
    res.headers('Access-Control-Allow-Origin', origin)
  }
  next()
};

module.exports = cors;
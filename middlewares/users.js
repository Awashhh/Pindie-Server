const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({}, { password: 0 });
  next();
}

const createUser = async (req, res, next) => {
	try {
		req.user = await users.create(req.body)
		next()
	} catch (error) {
		res.setHeader('Content-Type', 'application/json')
		res.status(400).send(JSON.stringify({ message: 'Ошибка создания пользователя' }))
	}
}

const findUserById = async (req, res, next) => {
	try {
		req.user = await users.findById(req.params.id).select("-password")
		next()
	} catch (error) {
		res.setHeader('Content-Type', 'application/json')
		res.status(400).send(JSON.stringify({ message: 'Пользователь не найден' }))
	}
}

const updateUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndUpdate(req.params.id, req.body)
		next()
	} catch (error) {
		res.setHeader('Content-Type', 'application/json')
		res
			.status(400)
			.send(JSON.stringify({ message: 'Ошибка обновления категории' }))
	}
} 

const deleteUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndDelete(req.params.id)
		next()
	} catch (error) {
		res.setHeader('Content-Type', 'application/json')
		res
			.status(400)
			.send(JSON.stringify({ message: 'Ошибка удаления пользователя' }))
	}
}

const checkEmptyNameAndEmailAndPassword = (req, res, next) => {
	if (!req.body.email || !req.body.password || req.body.user) {
		res.setHeader('Content-Type', 'application/json')
		res.status(400).send(JSON.stringify({ message: 'Заполни все поля' }))
	} else {
		next()
	}
}

const checkEmptyNameAndEmail = (req, res, next) => {
	if (!req.body.email || req.body.user) {
		res.setHeader('Content-Type', 'application/json')
		res.status(400).send(JSON.stringify({ message: 'Заполни все поля' }))
	} else {
		next()
	}
}

module.exports = {
	findAllUsers,
	createUser,
	findUserById,
	updateUser,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
}
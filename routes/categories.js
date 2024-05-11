const categoriesRouter = require('express').Router()

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories')
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories')
const { checkAuth } = require('../middlewares/auth')

categoriesRouter
	.get('/categories', findAllCategories, sendAllCategories)
	.get('/categories/:id', findCategoryById, sendCategoryById)
	.post('/categories', findAllCategories, checkEmptyName, checkIsCategoryExists, checkAuth, createCategory, sendCategoryCreated)
	.put('/categories/:id', findCategoryById, checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated)
	.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted)

module.exports = categoriesRouter

// Создаём роут для запросов категорий
const categoriesRouter = require('express').Router()

// Импортируем вспомогательные функции
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories')
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories')

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter
	.get('/categories', findAllCategories, sendAllCategories)
	.get('/categories/:id', findCategoryById, sendCategoryById)
	.post('/categories', findAllCategories, checkEmptyName, checkIsCategoryExists, createCategory, sendCategoryCreated)
	.put('/categories/:id', findCategoryById, checkEmptyName, updateCategory, sendCategoryUpdated)
	.delete('/categories/:id', deleteCategory, sendCategoryDeleted)

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter

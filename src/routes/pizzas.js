const { Router } = require('express');

const router = new Router();
const pizzasController = require('../controllers/pizzas');

//GET
router.get('/pizzas', pizzasController.getAll);

module.exports = router
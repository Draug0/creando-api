const { Router } = require('express');

const router = new Router();
const botellasController = require('../controllers/botellas')

//GET
router.get('/botellas', botellasController.getAll);
router.get('/botellas/:id', botellasController.getById);
router.get('/botellas/search/:name', botellasController.getByName);
router.get('/botellas/price/:price', botellasController.getByPrice);
router.get('/botellas/price-range/:min/:max', botellasController.getByPriceRange);

module.exports = router
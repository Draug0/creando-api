const { Router } = require('express')

const router = new Router();
const milanesasController = require('../controllers/milanesas');

//GET
router.get('/milanesas', milanesasController.getAll);
router.get('/milanesas/:id', milanesasController.getById)
router.get('/milanesas/search/:name', milanesasController.getByName);
router.get('/milanesas/price/:price', milanesasController.getByPrice);
router.get('/milanesas/price-range/:min/:max', milanesasController.getByPriceRange);

module.exports = router;
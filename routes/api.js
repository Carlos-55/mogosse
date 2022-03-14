const { Router } = require('express');
const { getAll, create } = require('../src/controller/product.controller');


const router = Router();

// get in product controller
router.get('/product/', getAll);
// create in product controller
router.post('/product/', create);


module.exports = router;
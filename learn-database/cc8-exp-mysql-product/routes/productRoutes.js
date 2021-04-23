const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

router.post('/multiple', productController.bulkCreate)

module.exports = router;
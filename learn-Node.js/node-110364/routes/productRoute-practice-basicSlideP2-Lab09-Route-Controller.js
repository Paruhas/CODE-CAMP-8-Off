const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController')

router.get('/all' , productController.getAllProduct )

router.get('/all/:id', productController.getProduct )

router.post('/add', productController.createProduct )

router.put('/edit/:id', productController.updateProduct )

router.delete('/:id', productController.deleteProduct )


module.exports = router;
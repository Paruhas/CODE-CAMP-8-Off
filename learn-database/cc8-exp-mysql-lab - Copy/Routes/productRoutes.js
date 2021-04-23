const express = require('express');
const productRoutes = express.Router();

const productController = require('../Controllers/productController');

productRoutes.get('/',productController.getAllProduct);
productRoutes.get('/:id',productController.getProductById);
productRoutes.post('/',productController.createProduct);
productRoutes.put('/:id',productController.updateProduct);
productRoutes.delete('/:id',productController.deleteProduct);

module.exports = productRoutes;
const express = require('express')
const productRouter = express.Router();
const productControllers = require('../controllers/productControllers')

productRouter.get('/',productControllers.getAllProducts);
productRouter.get('/:id',productControllers.getProduct);
productRouter.post('/',productControllers.createProduct);
productRouter.put('/:id',productControllers.editProduct);
productRouter.delete('/:id',productControllers.deleteProduct);

module.exports = productRouter
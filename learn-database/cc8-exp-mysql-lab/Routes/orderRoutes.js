const express = require('express');
const orderRoutes = express.Router();

const orderController = require('../Controllers/orderController');

orderRoutes.get('/',orderController.getAllOrder);
orderRoutes.get('/:id',orderController.getOrderById);
orderRoutes.post('/',orderController.createOrder);
orderRoutes.put('/:id',orderController.editOrder);
orderRoutes.delete('/:id',orderController.deleteOrder);

module.exports = orderRoutes;
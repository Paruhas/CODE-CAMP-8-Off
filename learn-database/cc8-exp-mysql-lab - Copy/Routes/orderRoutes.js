const express = require('express');
const orderRoutes = express.Router();

const orderController = require('../Controllers/orderController');


orderRoutes.get('/total-sale',orderController.getTotalSale);
orderRoutes.get('/:id',orderController.getOrder);
orderRoutes.post('/',orderController.createOrder);

orderRoutes.put('/:id',orderController.editOrder);
orderRoutes.delete('/:id',orderController.deleteOrder);

module.exports = orderRoutes;
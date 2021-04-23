const express = require('express')
const orderRouter = express.Router();
const orderControllers = require('../controllers/orderControllers')

// AGGREGATE
orderRouter.get('/total-sale',orderControllers.getTotalSale); // ต้องวางไว้เหนือ :id ไม่งั้นจะไปทำ :id ก่อน
orderRouter.get('/total-sale-customer',orderControllers.getTotalSaleEachCustomer); 


orderRouter.get('/',orderControllers.getAllOrders);
orderRouter.get('/:id',orderControllers.getOrder);
orderRouter.post('/',orderControllers.createOrder);
orderRouter.put('/:id',orderControllers.editOrder);
orderRouter.delete('/:id',orderControllers.deleteOrder);



module.exports = orderRouter
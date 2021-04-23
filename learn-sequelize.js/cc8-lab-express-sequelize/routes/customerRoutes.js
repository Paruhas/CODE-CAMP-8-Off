const express = require('express')
const customerRouter = express.Router();
const customerControllers = require('../controllers/customerControllers')

customerRouter.get('/',customerControllers.getAllCustomers);
customerRouter.get('/:id',customerControllers.getCustomer);
customerRouter.post('/',customerControllers.createCustomer);
customerRouter.put('/:id',customerControllers.editCustomer);
customerRouter.delete('/:id',customerControllers.deleteCustomer);

module.exports = customerRouter
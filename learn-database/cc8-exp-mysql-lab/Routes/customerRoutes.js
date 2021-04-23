const express = require('express');
const customerRoutes = express.Router();

const customerController = require('../Controllers/customerController')

customerRoutes.get('/',customerController.getAllCustomer);
customerRoutes.get('/:id',customerController.getCustomerById);
customerRoutes.post('/',customerController.createCustomer);
customerRoutes.put('/:id',customerController.editCustomer);
customerRoutes.delete('/:id',customerController.deleteCustomer);

module.exports = customerRoutes;
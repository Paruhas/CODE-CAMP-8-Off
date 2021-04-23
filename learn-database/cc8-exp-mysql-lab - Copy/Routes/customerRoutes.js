const express = require('express');
const router = express.Router();

const customerController = require('../Controllers/customerController')

router.get('/',customerController.getAllCustomer);
router.get('/:id',customerController.getCustomer);
router.post('/',customerController.createCustomer);
router.put('/:id',customerController.updateCustomer);
router.delete('/:id',customerController.deleteCustomer);

module.exports = router;










// const express = require('express');
// const customerRoutes = express.Router();

// const customerController = require('../Controllers/customerController')

// customerRoutes.get('/',customerController.getAllCustomer);
// customerRoutes.get('/:id',customerController.getCustomerById);
// customerRoutes.post('/',customerController.createCustomer);
// customerRoutes.put('/:id',customerController.editCustomer);
// customerRoutes.delete('/:id',customerController.deleteCustomer);

// module.exports = customerRoutes;
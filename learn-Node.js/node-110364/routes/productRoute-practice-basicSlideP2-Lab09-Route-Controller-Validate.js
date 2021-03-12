const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController')

// PATH ตามหลัก restful API
router.get('/', productController.getAllProduct )

router.get('/:id', 
            productController.checkProductIdIsExist,
            productController.getProduct )

router.post('/', 
            productController.validateProduct, 
            productController.createProduct )

router.put('/:id', 
            productController.checkProductIdIsExist,
            productController.validateProduct, 
            productController.updateProduct )

router.delete('/:id', 
            productController.checkProductIdIsExist,
            productController.deleteProduct )


module.exports = router;


// //แบบก่อนปรับ PATH ตามหลัก restful API
// router.get('/all', productController.getAllProduct )

// router.get('/:id', 
//             productController.checkProductIdIsExist,
//             productController.getProduct )

// router.post('/add', 
//             productController.validateProduct, 
//             productController.createProduct )

// router.put('/edit/:id', 
//             productController.checkProductIdIsExist,
//             productController.validateProduct, 
//             productController.updateProduct )

// router.delete('/delete/:id', 
//             productController.checkProductIdIsExist,
//             productController.deleteProduct )
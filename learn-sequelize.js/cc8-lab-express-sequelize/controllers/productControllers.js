// const db = require('../models/index') // ละ index ก็ได้ default ของ codeer มันจะไปหา index.js เสมอ
const { Product, Supplier } = require('../models/index') // detructoring จะได้ไม่ต้อง db.Product.Fn > เป็นแค่ Product.Fn พอ

getAllProducts = async (req, res, next) => {
    try {
        // console.log(db);
        const products = await Product.findAll({
            include: [
                {
                    model: Supplier
                }
            ]
        });
        res.status(200).json({ products });
    } catch(err) {
        next(err);
    }
};

getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ 
            where: { id },
            include: [
                {
                    model: Supplier
                }
            ]
        });
        res.status(200).json({ product });
    } catch(err) {
        next(err);
    }
};
 
createProduct = async (req, res, next) => {
    try {
        const { name, desc, price, quantity, supplierId } = req.body;
        const newProduct = await Product.create({ name: name, desc: desc, price: price, quantity: quantity, supplierId: supplierId });
        res.status(201).json({ newProduct });
    } catch(err) {
        next(err);
    }
};
 
editProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, desc, price, quantity, supplierId } = req.body;
        const editProduct = await Product.update(
            { 
                name: name, 
                desc: desc, 
                price: price, 
                quantity: quantity, 
                supplierId: supplierId 
            },
            { 
                where: { id:id }
            } 
        );
        // console.log(editProduct);
        res.status(200).json({ 
            message: editProduct == 1 ? { 
                name: name, 
                desc: desc, 
                price: price, 
                quantity: quantity, 
                supplierId: supplierId 
            } : 
            'no update product' 
        });
    } catch(err) {
        next(err);
    }
};
 
deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.destroy(
            { where: { id } }
        );
        res.status(204).json({});
    } catch(err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct,
};
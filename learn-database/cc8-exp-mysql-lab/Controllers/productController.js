const Product = require('../Models/Products');


getAllProduct = ( async (req, res, next) => {
    try {
        const products = await Product.findAllProduct();
        res.status(200).json({ 'All product': products });
    } catch(err) {
        next(err);
    }
});

getProductById = ((req, res, next) => {

});

createProduct = ( async (req, res, next) => {
    try {

        if ( !req.body.name || !req.body.name.trim() ) return res.status(400).json({message: 'name is required'});
        if ( isNaN(req.body.price) ) return res.status(400).json({message: 'price must be numeric'});
        if ( isNaN(req.body.quantity) ) return res.status(400).json({message: 'quantity must be numeric'});
        if ( isNaN(req.body.supplier_id) ) return res.status(400).json({message: 'supplier_id must be numeric'});

        if ( req.body.desc === undefined ) {
            const { name, price, quantity, supplier_id } = req.body;
            const product = await Product.createProduct({ name, price, quantity, supplier_id });
            res.status(201).json({ 'Product create successful': product });
        } else {
            if ( !req.body.desc || !req.body.desc.trim() ) return res.status(400).json({message: 'invalid desc'});
            const { name, desc, price, quantity, supplier_id } = req.body;
            const product = await Product.createProduct({ name, desc, price, quantity, supplier_id });
            res.status(201).json({ 'Product create successful': product });
        } 
    } catch(err) {
        next(err);
    }
});

updateProduct = ((req, res, next) => {

});

deleteProduct = ((req, res, next) => {

});


module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
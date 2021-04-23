// const db = require('../utils/db');
const { findById } = require('../models/Products');
const Product = require('../models/Products')

getAllProducts =  ( async (req, res, next) => {

    // connectionPool.execute('SELECT * FROM products', (err, result, field) => {
    //     console.log(result);
    //     console.log(field);
    //     res.status(200).json({ products: result });
    // });

    // db.execute('SELECT * FROM products')
    //     .then(result => {});
    //     .catch(err => {});

    try {

        // const result = await db.execute('SELECT * FROM products');
        // res.status(200).json({ products: result[0] });

        // const [result ,field] = await db.execute('SELECT * FROM products');
        // res.status(200).json({ products: result });

        const products = await Product.findAll();
        res.status(200).json({ products });

    } catch (err) {
        next(err);
    }
});

getProduct =  ( async (req, res, next) => {
    try {
        const { id } = req.params;

        // const result = await db.execute('SELECT * FROM products WHERE id = ?',[
        //     id
        // ]);
        // res.status(200).json({ products: result[0].length ?  result[0][0] : 'No product id'});

        const findProduct = await Product.findById(id);
        // console.log(findProduct)
        res.status(200).json({ findProduct: findProduct === null ? 'no product you are looking for' : findProduct });
    } catch(err) {
        next(err);
    }
});

createProduct =  ( async (req, res, next) => {
    try {
        const { name , price } = req.body;

        if ( !name || !name.trim() ) {
            return res.status(400).json({ message: 'name is required'});
        }
        if ( price === undefined ) {
            return res.status(400).json({ message: 'price is required'});
        }
        if ( !( +price > 0 ) ) {
            return res.status(400).json({ message: 'price is invalid (must be numeric and greater than zero)'});
        }

    // connectionPool.execute(
        // 'INSERT INTO products (name, price) VALUES (?, ?)', [name, price],
        // (err, result, field) => {
        //     if (err) return res.status(500).json({ message: err.message });
        //     console.log(result);
        //     console.log(field);
        //     res.status(200).json({ message: 'Create Product' });
        // }
        
        // const result = await db.execute('INSERT INTO products (name, price) VALUES (?, ?)', [
        //     name, price
        // ]);

        // res.status(200).json({ message: 'Create product success with new Id is: ' + result[0].insertId });
        
        // const product = await Product.create({name, price});
        // console.log(res)
        // res.status(200).json({ create_product: product });
       
        // ของอาจารย์
        // const product = new Product(name, price);
        // const newProduct = await product.save();
        // res.status(200).json({ products: newProduct });

        const product = new Product(name, price);
        await product.save();
        res.status(200).json({ products: product });
    } catch(err) {
        next(err);
    }
});

bulkCreate = ( async (req, res, next) => {
    try {
        const { products } = req.body;
        // console.log(products)

        for ({ name, price } of products) {
            if ( !name || !name.trim() ) {
                return res.status(400).json({ message: 'name is required'});
            }
            if ( price === undefined ) {
                return res.status(400).json({ message: 'price is required'});
            }
            if ( !( +price > 0 ) ) {
                return res.status(400).json({ message: 'price is invalid (must be numeric and greater than zero)'});
            }
        }

        await Product.bulkCreate(products);
        res.status(201).json({ message: 'all product created', added_products: products})

    } catch(err) {
        next(err);
    }
})

updateProduct =  ( async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;

        // if ( !name || !name.trim() ) {
        //     return res.status(400).json({ message: 'name is required'});
        // }
        // if ( price === undefined ) {
        //     return res.status(400).json({ message: 'price is required'});
        // }
        // if ( !( +price > 0 ) ) {
        //     return res.status(400).json({ message: 'price is invalid (must be numeric and greater than zero)'});
        // }

        // const resultProduct = await db.execute('SELECT * FROM products WHERE id = ?',[
        //     id
        // ]);

        // if ( !resultProduct[0].length ) 
        //     return res.status(400).json({message: 'product with this id is not found'});

        // await db.execute('UPDATE products SET name = ?, price = ? WHERE id = ?',[
        //     name, price, id
        // ]);
        // res.status(200).json({ message: 'Update Products'});
        

        let findProduct = await Product.findById(id);

        if ( !findProduct ) 
            return res.status(400).json({message: 'product with this id is not found'});

        if ( !name || !name.trim() ) {
            return res.status(400).json({ message: 'name is required'});
        }
        if ( price === undefined ) {
            return res.status(400).json({ message: 'price is required'});
        }
        if ( !( +price > 0 ) ) {
            return res.status(400).json({ message: 'price is invalid (must be numeric and greater than zero)'});
        }

        // const result = await Product.update(req.body, req.params)
        // findProduct = await Product.findById(id);
        // res.status(200).json({ 'Update Products':findProduct });

        // ของอาจารย์
        const product = await Product.updateById( id, { name, price } );  
        res.staus(200).json( { product } );

    } catch(err) {
        next(err);
    }
});

deleteProduct =  ( async (req, res, next) => {
    try {
        const { id } = req.params;
        // const resultProduct = await db.execute('SELECT * FROM products WHERE id = ?',[
        //     id
        // ]);

        // if ( !resultProduct[0].length ) 
        //     return res.status(400).json({message: 'product with this id is not found'});

        // await db.execute('DELETE FROM products WHERE id = ?',[
        //     id
        // ]);

        // console.log(result);
        // res.status(204).json()


        // console.log(findProduct)
        // const findProduct = await Product.findById(id);

        // if ( !findProduct ) 
        //     return res.status(400).json({message: 'product with this id is not found'});

        // await Product.delete(id);
        // res.status(200).json({ delete_product: findProduct })
        // res.status(204).json()


        //ของอาจารย์

        const deleteProduct = await Product.findById(id);
        await Product.deleteById(id);
        res.status(200).json({ 'delete product': deleteProduct })
        // res.status(204).json()
    } catch(err) {
        next(err);
    }
});


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,

    bulkCreate,

    updateProduct,
    deleteProduct
}
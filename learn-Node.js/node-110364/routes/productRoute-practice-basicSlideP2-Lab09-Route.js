const express = require('express');

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const router = express.Router();

// search name // get all ไปในตัวด้วย
router.get('/all', async (req, res, next) => {
    try {
        const { name, order} = req.query;

        const data = await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);

        let result = [...products];

        if ( name )  {
            result = products.filter((item, index) => {
                return item.name.toLowerCase().includes(name.toLowerCase())
            });
        };

        if ( order ) {
            if ( order.startsWith('-') ) {
                result.sort((a, b) => 
                    ( b[order.slice(1)] > a[order.slice(1)] ? 1 : -1 ));
            } else {
                result.sort((a, b) => 
                    ( a[order] > b[order] ? 1 : -1 ));
            };
        };


        res.status(200).json({products: result});
        
    } catch {
        console.log(err);
        res.status(500).json({message: err.message});
    }
} )
// search id
router.get('/all/:id', async (req, res, next) => { 
    try {
        const { id } = req.params;
        const data = await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);
        const filteredProduct = products.filter((item, index) => item.id === +id)
        res.status(200).json({ products: filteredProduct.length ? filteredProduct[0] : null });
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
} )
// post add
router.post('/add', async (req, res, next) => {
    try {
        
        const { name , price } = req.body;
        if ( !name || !(name.trim()) ) return res.status(400).json({message: 'Input name is require'});
        if ( !(+price) || +price <= 0) return res.status(400).json({message: 'Invalid price (must be Number and greater than zero)'});
    
        const data =  await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: name,
            price: +price
        };
        products.push(newProduct);
        await writeFile('./product.json', JSON.stringify(products));
        res.status(201).json({
            message: 'Product add successfully',
            Product: products[products.length - 1] });

    } catch (err) {

        return res.status(500).json({message: 'Internal sever error'});

    }
} )
// edit
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        if ( !name || !(name.trim()) ) return res.status(400).json({message: 'Input name is require'});
        if ( !(+price) || +price <= 0) return res.status(400).json({message: 'Invalid price (must be Number and greater than zero)'});

        const data = await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);;

        const idx = products.findIndex(item => item.id === +id);

        if (idx === -1) return res.status(400).json({message: 'Invalid product id'});
        
        // แบบใช้ FindIndex ต่อ
        if ( name ) { products[idx].name = name.trim() };
        if ( price ) { products[idx].price = +price };
        await writeFile('./product.json', JSON.stringify(products));
        res.status(200).json({ message: 'Product update successfully' , products : products[idx] });

    } catch(err) {
        console.log(err)
        res.status(500).json({message: err.message});
    }
} )
// delete
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const data = await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);

        const idx = products.findIndex(item => item.id === +req.params.id); 
        if (idx === -1) return res.status(400).json({message: 'Invalid product id'});

        const updatedProductsDelete = products.filter((item, index) => item.id !== +req.params.id);
        await writeFile('./product.json', JSON.stringify(updatedProductsDelete));
        res.status(204).json();

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
} )

module.exports = router;
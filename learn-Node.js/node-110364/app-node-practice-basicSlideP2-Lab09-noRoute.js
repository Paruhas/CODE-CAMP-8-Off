const express = require('express');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Search by Name // ต้องใส่ไว้บนสุด ก่อน get all ไม่งั้นไม่ทำงาน  // get all ไปในตัวด้วย
app.get('/product/all', async (req, res, next) => {
    try {
        const { name, order} = req.query;
        console.log(name)

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
});


// // // เฉลย ข้อ 1.1
// // // แบบ Call Back Fn
// app.post('/product/add', (req, res, next) => {
    // const { name , price } = req.body;

    // // Code แบบเต็ม
    // if ( !name || !(name.trim()) ) {
    //     res.status(400).json({message: 'Input name is require'});
    // } else if ( !(+price) || +price <= 0 ) {
    //     res.status(400).json({message: 'Invalid price (must be Number and greater than zero'});
    // } else {
    //     fs.readFile('./product.json', 'utf8', (err, data) => {
    //         if (err) {
    //             res.status(500).json({message: 'Internal sever error'});
    //         } else {
    //             const products = JSON.parse(data);
    //             const newProduct = {
    //                 id: products[products.length - 1].id +1,
    //                 name: name,
    //                 price: +price
    //             };
    //             products.push(newProduct);
    //             fs.writeFile('./product.json', JSON.stringify(products), err => {
    //                 if (err) {
    //                     res.status(500).json({message: 'Internal sever error'});
    //                 } else {    
    //                     res.status(201).json({
    //                         message: 'Product add successfully',
    //                         Product: products[products.length - 1] });
    //                 }
    //             });
    //         }
    //     });
    // }

    // // Code Refactor
    // if ( !name || !(name.trim()) ) return res.status(400).json({message: 'Input name is require'});
    // if ( !(+price) || +price <= 0) return res.status(400).json({message: 'Invalid price (must be Number and greater than zero)'});
    // fs.readFile('./product.json', 'utf8', (err, data) => {
    //     if (err) return res.status(500).json({message: 'Internal sever error'});
    //         const products = JSON.parse(data);
    //         const newProduct = {
    //             id: products[products.length - 1].id +1,
    //             name: name.trim(),
    //             price: +price
    //     };
    //     products.push(newProduct);
    //     fs.writeFile('./product.json', JSON.stringify(products), err => {
    //         if (err) return res.status(500).json({message: 'Internal sever error'});
    //         res.status(201).json({
    //             message: 'Product add successfully',
    //             Product: products[products.length - 1] });
    //         }
    //     );
    // })

    // console.log(req.body)
    // res.status(200).json('test')
// });

// แบบ Promisify => กำหนด fn ให้เป็น util.promisify ก่อน ถึงจะใช้ async await
app.post('/product/add', async (req, res, next) => {
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
});


// //  get all ทำเอง // ไม่ต้องใช้แล้ว เพราะไปอยู่ใน search by name แล้ว
// app.get('/product/all', async (req, res, next) => {
//     try {

//         const data = await readFile('./product.json', 'utf8');
//         const products = JSON.parse(data);

//         res.status(201).json( products );

//     } catch (err) {

//         res.status(500).json({message: 'Internal server error'})

//     }
// });
// app.get('/product/all', async (req, res, next) => {
//     try {
//         const data = await readFile('./product.json', 'utf8');
//         const products = JSON.parse(data);
//         res.status(200).json({products: products});
//     } catch {
//         console.log(err);
//         res.status(500).json({message: err.message});
//     }
// });


// Search by id
app.get('/product/:id', async (req, res, next) => { 
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
});


// Edit by id
app.put('/product/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        // console.log(req.params) // req.params.id
        // console.log(req.body) // req.body.name req.body.price

        if ( !name || !(name.trim()) ) return res.status(400).json({message: 'Input name is require'});
        if ( !(+price) || +price <= 0) return res.status(400).json({message: 'Invalid price (must be Number and greater than zero)'});

        const data = await readFile('./product.json', 'utf8');
        const products = JSON.parse(data);;

        const idx = products.findIndex(item => item.id === +id);
        // const idx = products.findIndex(item => item.id === +req.params.id); 
        if (idx === -1) return res.status(400).json({message: 'Invalid product id'});
        

        // // แบบใช้ MAP
        // const newProduct = {
        //     id: +id,
        //     name: name.trim(),
        //     price: +price
        //     // id: +req.params.id,
        //     // name: req.body.name.trim(),
        //     // price: +req.body.price
        // }
        
        // const updatedProducts = products.map((item, index) =>  item.id === +id ? newProduct : item )
        // // const updatedProducts = products.map((item, index) =>  item.id === +req.params.id ? newProduct : item )
        // await writeFile('./product.json', JSON.stringify(updatedProducts));
        // res.status(200).json({ message: 'Product update successfully' , products : newProduct });

        // แบบใช้ FindIndex ต่อ
        if ( name ) { products[idx].name = name.trim() };
        if ( price ) { products[idx].price = +price };
        await writeFile('./product.json', JSON.stringify(products));
        res.status(200).json({ message: 'Product update successfully' , products : products[idx] });

    } catch(err) {
        console.log(err)
        res.status(500).json({message: err.message});
    }
})

// //  delete ทำเอง
// app.delete('/product/delete/:id', async (req, res, next) => {
//     try {
//         // console.log(req.params)
        
//         const data = await readFile('./product.json', 'utf8');
//         const products = JSON.parse(data);

//         // console.log(products)
//         // console.log(products[0].id)

//         deletedProducts = products.filter((item, index) => item.id != req.params.id)
//         // console.log(deletedProducts)
//         await writeFile('./product.json', JSON.stringify(deletedProducts));
//         res.status(201).json( deletedProducts );

//     } catch (err) {

//         res.status(500).json({message: 'Internal server error'})

//     }
// });
app.delete('/product/:id', async (req, res, next) => {
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
});





const port = 8000;
app.listen(port, () => console.log('Serve Online at por ' + port))
const express = require('express');

const app = express();

const routerUser = require('./routere/userRouter')
const routerProduct = require('./routere/productRouter')

app.use('/user', routerUser)
app.use('/product', routerProduct)

const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
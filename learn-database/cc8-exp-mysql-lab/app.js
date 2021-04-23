// import express เข้ามา และให้ app run express
const express = require('express');
const app = express();

// ตัวแปลง json และ urlencoded เป็น OBJ
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// import ตัว router เข้ามา
const customerRoutes = require('./Routes/customerRoutes');
const productRoutes = require('./Routes/productRoutes');
const orderRoutes = require('./Routes/orderRoutes');


app.use('/customer',customerRoutes);
app.use('/product',productRoutes);
app.use('/order',orderRoutes);


// ดัก PATH ERROR
app.use('/', (req, res, next) => {
    res.status(404).json({message: 'PATH ERROR'});
});

// ดัก ERROR
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: 'ERROR: ' + err.message });
});

const port = 8000;
app.listen(port, () => console.log('Server running on port: ' + port))
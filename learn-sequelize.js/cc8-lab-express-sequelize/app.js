const express = require('express');
const app = express();

const customerRouter = require('./routes/customerRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');

// const sequelize = require('./models/index'); // เอาออก ไม่ควรทำ sync 

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/customers',customerRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

// sequelize.sync({ force: true }); // เอาออก ไม่ควรทำ sync 

app.use((req, res, next) => {
    res.status(404).json({message:'PATH ERROR'});
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message:err.message});
});

const port = 8000;
app.listen(port, () => console.log('Port start on: ' + port));
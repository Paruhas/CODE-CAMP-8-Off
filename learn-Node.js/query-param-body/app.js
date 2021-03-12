const express = require('express');
const app = express();

app.get('/product', (req, res, next) => {
    // const query = req.query;
    // const order =  req.query.order;
    // const page = req.query.page;
    // const limit =  req.query.limit;
    const { order , page , limit } = req.query;
    console.log(order);
    console.log(page);
    console.log(limit);
    res.json({message : 'success'})
    
});

app.get('/product/:id/:price', (req, res, next) => {
    const params = req.params;
    const query = req.query;
    const order =  req.query.order;
    const page = req.query.page;
    const limit =  req.query.limit;
    console.log(params);
    console.log(order);
    console.log(page);
    console.log(limit);
    res.json({ message:'Success' })
});



const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
const express = require('express');

const app = express();

const firstMiddleware = (req, res, next) => {
    console.log('First Middleware');
    next();
};

const secondMiddleware = (req, res, next) => {
    console.log('Second Middleware');
    res.status(200).json('Res from Second Middleware')
    next();
};

const thirdMiddleware = (req, res, next) => {
    console.log('Third Middleware');
    res.status(200).json('Res from Third Middleware')
};



app.use(firstMiddleware);

app.get('/', (req, res, next) => {
    console.log('PATH "/" METHOD: ' + req.method);
    res.status(200).send('END')
    // next();
});

app.use(secondMiddleware);



const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
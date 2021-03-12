const express = require('express');
const personRoute = require('./personRoute/personRoute');

const app = express();

app.use('/person', personRoute)

const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
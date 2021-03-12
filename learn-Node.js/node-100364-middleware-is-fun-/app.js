const express = require('express');
const app = express();
const router = require('router')

app.person = ('/person',router)

const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
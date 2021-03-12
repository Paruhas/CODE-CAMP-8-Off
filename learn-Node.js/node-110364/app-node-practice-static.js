const express = require('express')
const app = express();

app.use(express.static('public'))
app.use('/static',express.static('public'))


const port = 8000;
app.listen(port, () => console.log('Serve Online at por ' + port))
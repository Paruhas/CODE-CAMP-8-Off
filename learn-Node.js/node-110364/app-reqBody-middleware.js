const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.post('/product', (req, res, next) => {
    const body = req.body
    // console.log(req)
    console.log(body)
    // console.log(body.a)
    res.json({ message: 'Test Body'})
});

const port = 8000;
app.listen(port, () => console.log('Serve Online at por ' + port))
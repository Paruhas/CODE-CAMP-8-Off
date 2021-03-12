const express = require('express')

const app = express();


app.post('/login', (req, res) => {
    const { path , method } = req;
    res.status(200).json({ path: path.slice(1) , method: method })
})

app.post('/register', (req, res) => {
    res.status(200).json({ path: req.path.slice(1) , method: req.method })
})

app.get('/user', (req, res) => {
    res.status(200).json({ path: req.path.slice(1) , method: req.method })
})

app.put('/user', (req, res) => {
    res.status(200).json({ path: req.path.slice(1) , method: req.method })
})

app.delete('/user', (req, res) => {
    res.status(200).json({ path: req.path.slice(1) , method: req.method })
})


const port = 8000;
app.listen(port, ()=> console.log(`Server Express on port ${port}`))


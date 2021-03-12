const express = require('express')

const app = express();

app.get('/product', (req, res) => {
    // console.log(req) // log ดูค่า จะเป็น {} ยาวๆๆ มีค่า method:'GET'
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    res.status(200).json({message , 'method': req.method })
})

app.post('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    res.status(200).json({message , 'method': req.method })
})

app.delete('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    res.status(200).json({message , 'method': req.method })
})

app.put('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    res.status(200).json({message , 'method': req.method })
})


const port = 8000;
app.listen(port, ()=> console.log(`Server Express on port ${port}`))


/////////////////////////////////////////////////////////////////////

// // แบบสั้นๆ

// const express = require('express')

// const app = express();

// app.get('/product', (req, res) => {
//     const message = getMessage(req.method)
//     res.status(200).json({ message , 'method':req.method})
// })

// app.post('/product', (req, res) => {
//     const message = getMessage(req.method)
//     res.status(200).json({ message , 'method':req.method})
// })

// app.delete('/product', (req, res) => {
//     const message = getMessage(req.method)
//     res.status(200).json({ message , 'method':req.method})
// })

// app.put('/product', (req, res) => {
    
//     res.status(200).json({message , 'method': req.method })
// })

// function getMessage(method) {
//     let message = ''
//     if ( method === 'POST' ) message = 'Create';
//     else if ( method === 'GET' ) message = 'Read';
//     else if ( method === 'PUT' ) message = 'Update';
//     else if ( method === 'DELETE' ) message = 'Delete';
//     message = message + ' Product'
//     return message
// }

// const port = 8000;
// app.listen(port, ()=> console.log(`Server Express on port ${port}`))


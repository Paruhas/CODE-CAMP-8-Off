const express = require('express')
const fs = require('fs')

const app = express();

app.get('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'

    fs.readFile('./ex-basic-node-part2-lab03-count.json', 'utf8', (err, data) => {

        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // console.log(JSON.parse(data));

        const count = JSON.parse(data);

        count[req.method] = count[req.method] + 1;

        fs.writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count), err => {

            if (err) return res.status(500).json({ message: 'Internal Server Error' });

            res.status(200).json({ message: message , 'method': req.method , count: count[req.method]});

        });
    });
});

app.post('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'

    fs.readFile('./ex-basic-node-part2-lab03-count.json', 'utf8', (err, data) => {

        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // console.log(JSON.parse(data));
        
        const count = JSON.parse(data);

        count[req.method] = count[req.method] + 1;

        fs.writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count), err => {

            if (err) return res.status(500).json({ message: 'Internal Server Error' });

            res.status(200).json({ message: message , 'method': req.method , count: count[req.method]});

        });
    });
});

app.delete('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'

    fs.readFile('./ex-basic-node-part2-lab03-count.json', 'utf8', (err, data) => {

        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // console.log(JSON.parse(data));
        
        const count = JSON.parse(data);

        count[req.method] = count[req.method] + 1;

        fs.writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count), err => {

            if (err) return res.status(500).json({ message: 'Internal Server Error' });

            res.status(200).json({ message: message , 'method': req.method , count: count[req.method]});

        });
    });
});

app.put('/product', (req, res) => {
    let message = ''
    if ( req.method === 'POST' ) message = 'Create';
    else if ( req.method === 'GET' ) message = 'Read';
    else if ( req.method === 'PUT' ) message = 'Update';
    else if ( req.method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    
    fs.readFile('./ex-basic-node-part2-lab03-count.json', 'utf8', (err, data) => {

        if (err) return res.status(500).json({ message: 'Internal Server Error' });

        // console.log(JSON.parse(data));
        
        const count = JSON.parse(data);

        count[req.method] = count[req.method] + 1;

        fs.writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count), err => {

            if (err) return res.status(500).json({ message: 'Internal Server Error' });

            res.status(200).json({ message: message , 'method': req.method , count: count[req.method]});

        });
    });
});


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


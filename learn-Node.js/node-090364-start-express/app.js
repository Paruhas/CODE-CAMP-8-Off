const express = require('express')
const fs = require('fs')

const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const app = express();

app.get('/product', async (req, res) => {
    try {
        const { method } = req;
        const message = getMessage(method);
        const data = await readFile('./ex-basic-node-part2-lab03-count.json', 'utf8');
        const count = JSON.parse(data);
        count[method] += 1;
        await writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count));
        res.status(200).json({ message: message, method: method, count: count[method] });
    } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/product', (req, res) => {
    try {
        const message = getMessage(req.method);
        fs.readFile('./ex-basic-node-part2-lab03-count.json', 'utf8', (err,data) => {
            const count = JSON.parse(data);
            count[req.method] = count[req.method] + 1;
            fs.writeFile('./ex-basic-node-part2-lab03-count.json', JSON.stringify(count), err => {
                res.status(200).json({ message: message , 'method': req.method , count: count[req.method]})
            })
        })
    } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
    }
    
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

function getMessage(method) {
    let message = ''
    if ( method === 'POST' ) message = 'Create';
    else if ( method === 'GET' ) message = 'Read';
    else if ( method === 'PUT' ) message = 'Update';
    else if ( method === 'DELETE' ) message = 'Delete';
    message = message + ' Product'
    return message
}

const port = 8000;
app.listen(port, ()=> console.log(`Server Express on port ${port}`))
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // switch(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    if (req.url === '/') {
        fs.readFile('./index.html', 'utf8' , (err, data) => {
            if (err) console.log(err)
            res.end(data);   
        })
    } else if (req.url === '/login') {
        fs.readFile('./login.html', 'utf8' , (err, data) => {
            if (err) console.log(err)
            res.end(data);   
        })
    } else if (req.url === '/home') {
        fs.readFile('./home.html', 'utf8' , (err, data) => {
            if (err) console.log(err)
            res.end(data);   
        })
    } else {
        fs.readFile('./notfound.html', 'utf8' , (err, data) => {
            if (err) console.log(err)
            res.end(data);   
        })   
    }
})

server.listen(8000, () => console.log('Server running on port 8000'))
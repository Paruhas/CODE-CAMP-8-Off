const express = require('express')
const app = express();

app.get('', function(req, res){
    res.send('hello world');
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Page not found on this server'})
})

const port = 8000;
app.listen(port, () => console.log('Serve Online at por ' + port))
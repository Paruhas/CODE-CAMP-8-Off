const express = require('express')
const app = express();


// app.get('/sum' , (req, res, next) => {
//     res.status(200).json({sum:+req.query.a + +req.query.b})
// });
// // เฉลย 
// app.get('/sum' , (req, res, next) => {
//     const query = req.query;
//     const sum = Object.entries(query).reduce((
//         acc, [key, value]) => +value +acc, 
//         0);
//     res.status(200).json({ sum });
// });


// app.get('/sum/:a/:b' , (req, res, next) => {
//     res.status(200).json({sum:+req.params.a + +req.params.b})
// });
// // เฉลย 
// app.get('/sum/:a/:b/?:c' , (req, res, next) => {
//     const { a, b } = req.params;
//     res.status(200).json({ sum: +a + +b });
// });


// app.use(express.urlencoded({ extended: true }))
// app.post('/sum' , (req, res, next) => {
    //     // console.log(req.body)
    //     res.status(200).json({sum:+req.body.a + +req.body.b})
    // });
// // เฉลย 
// app.use(express.json())
// app.post('/sum' , (req, res, next) => {
//     const body = req.body;
//     const sum = Object.entries(body).reduce((
//         acc, [key, value]) => +value +acc, 
//         0);
//     res.status(200).json({ sum });
// });


// app.get('/sum' , (req, res, next) => {
//     obj = JSON.parse(req.query.arr)
//     console.log(obj)
//     a = obj.reduce((acc, item) => {
//         return acc + item
//     }, 0)
//     res.status(200).json({sum:a})
// });
// // // เฉลย 
// app.get('/sum' , (req, res, next) => {
//     const query = req.query;
//     let sum;
//     if (query.arr) {
//         sum = JSON.parse(query.arr).reduce((acc, el) => acc + el, 0)
//     } else {
//         sum = Object.entries(query).reduce((
//             acc, [key, value]) => +value +acc, 
//         0);
//     }
//     res.status(200).json({ sum });
// });


// // ADVANCE
// app.get('/sum' , (req, res, next) => {
//     const query = req.query;
//     const sum = Object.entries(query).reduce((acc, [key, value]) => {
//         if (key === 'arr') acc += JSON.parse(query.arr).reduce((acc, el) => acc + el, 0);
//         else acc =+ +value;
//         return acc;
//     }, 0);

//     res.status(200).json({ sum });
// });


const port = 8000;
app.listen(port, () => console.log('Serve Online at por ' + port))
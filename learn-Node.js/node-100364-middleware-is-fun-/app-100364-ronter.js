const express = require('express');

const app = express();


// app.post('/user/login', (req, res, next) => {});
// app.post('/user/register', (req, res, next) => {});
// app.get('/user/profile', (req, res, next) => {});
// app.get('/user/post', (req, res, next) => {});
// app.post('/user/profile', (req, res, next) => {});
// app.delete('/user/post', (req, res, next) => {});


const router = express.Router();

router.post('/login', (req, res, next) => {
    res.status(200).send('POST LOGIN');
});
router.post('/register', (req, res, next) => {});
router.get('/profile', (req, res, next) => {});
router.get('/post', (req, res, next) => {});
router.post('/profile', (req, res, next) => {});
router.delete('/post', (req, res, next) => {});

app.use('/user', router) // วิ่งมาทำตรงนี้ก่อน ; เจอ PATH /user จะไปทำงานตัว Ronter Middleware ; แล้ว วิ่งไปต่อ PATH ต่างๆใน router.METHOD ; เสมือนเอาตัว PATH ของ .use(,router) ไปต่อกับ PATH ที่ ronter.METHOD

const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
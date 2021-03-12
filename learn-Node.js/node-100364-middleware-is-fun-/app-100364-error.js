const express = require('express');

const app = express();


// // ยกตัวอย่าง Error
// app.post('/login', (req, res, next) => {
//     console.log('Proceed to Log in')
//     const username = ''; // Error แบบ Synchronous ตัว JS ดักเจอได้
//     if (!username) {
//         const error = new Error('Plz enter username');
//         error.statusCode = 400;
//         // console.log(error)
//         throw error;
//         // next(error); // next() จะวิ่งไปหา Middleware ตัวถัดไป ; ถ้ามี parameter ข้างใน แบนนี้ next(error) จะวิ่งไปหา Middleware Error-handling
//     }
//     // res.status(400).json({ message : 'Username is required' });
// });


// แบบ try catch ; setTimeout ถ้า run แล้วไม่ผ่านในกี่วิ catch error
app.get('/login', (req, res, next) => {
    setTimeout(() => {
      try {
        console.log(username);
      } catch (err) {
        next(err);
      }
    }, 3000);
});


app.use((req, res, next) => {}); // Middleware ปกติ แบบไม่มี Error-handling

app.use((err, req, res, next) => { // Middleware แบบมี Error-handling
    console.log(err);
    // res.status(err.statusCode || 500).json({ message: err.message })
});


const port = 8000;
app.listen(port, () => 
    console.log('Server is running on port: ' + port)
);
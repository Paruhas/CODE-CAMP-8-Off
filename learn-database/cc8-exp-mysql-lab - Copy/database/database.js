const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"admin1234",
    database:"codecamp_shop"
});

const db = pool.promise();

//สร้าง Fn ลดความซ้ำซ้อนในหน้า Controller
const query = (sql, values) => {
    return pool.promise().execute(sql, values)
    .then(([result]) => result );
}

// คำสั่ง execute อีกแบบนึง > สามารถทำ nest Table ได้
// pool.promise().execute({sql: 'SELECT * FROM products WHERE id = ?', values: [10] , nestTable: "_"})

module.exports = {
    query,
    pool: pool.promise()
};
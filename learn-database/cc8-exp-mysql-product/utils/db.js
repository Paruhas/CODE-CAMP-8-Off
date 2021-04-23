const mysql = require('mysql2');

const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'easy_app'
});

// const db = connectionPool.promise();

module.exports = connectionPool.promise();
// // สร้าางขึ้นมาลดความซ้ำซ้อนการใช้ model 3 ตัว > รวมเป็นตัวเดียวไว้เรียกให้แต่ละ Controller เรียกจากไฟล์เดียวไปเลย

// const db = require('../database/database')

// class Model {
//     static tableName = 'customers';

//     static findAll() {
//         return db.query(`SELECT * FROM ${this.tableName}`);
//     }

//     static create(customer) {
//         // แปลง Fn สำหรับสร้างคำสั่งของ SQL ตามการเียกของแต่ละ Controller เป็น for loop สร้างค่าตามคำที่จะกรอกอีกที
//         let sql = '(';
//         let sql2 = '(';
//         let values = [];
//         for (let column of this.columns) {
//             sql = `${sql}${column},`;
//             sql = `${sql2}?,`;
//             values.push(resource[column]);
//         }
//         sql = sql.slice(0, -1) + ')';
//         sql2 = sql2.slice(0, -1) + ')';
//         const cols = this.columns.map
//         return db.query(`INSERT INTO ${this.tableName} ${sql} VALUES ${sql2}`, [
//             customer.name, 
//             customer.address
//         ]).then(result => { 
//             if (result.affectedRows) return { id: result.insertId, ...customer };
//             throw new Error(`cannot create ${this.tableName}: affected rows is zero`);
//         });
//     }
// }

// module.exports = Model;
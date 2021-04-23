const db = require('../database/database');

// import Model เข้ามาด้วย
const Model = require('./Model');

// ให้ Customer สามารถใช้งาน Fn ใน Model.js ได้ (Model.js === class แม่)
// class Customer extends Model {
    // static tableName = 'customers';
    // static columns = [ 'name','address' ];
class Customer {

    // ย้ายไปที่ Model.js
    static findAll() {
        // db.execute('SELECT * FROM customers').then(([result]) => result); // เขียน code Fn ลดความซ้ำซ้อน จากหน้า Model
        return db.query('SELECT * FROM customers');
    }
    static findById(id) {
        // db.execute('SELECT * FROM customers WHERE id = ?', [id]).then(([result]) => result );
        return db.query('SELECT * FROM customers WHERE id = ?',[id])
        .then(result => result.length ? result[0] : null)
    }
    // ย้ายไปที่ Model.js
    static create(customer) {
        return db.query('INSERT INTO customers (name, address) VALUE (?, ?)', [
            customer.name, 
            customer.address
        ]).then(result => { 
            if (result.affectedRows) return { id: result.insertId, ...customer };
            throw new Error('cannot create customer: affected rows is zero');
        });
    }
    static updateById(id, customer) {
        return db.query('UPDATE customer SET name = ?, address = ? WHERE id = ?', [
            customer.name,
            customer.address,
            id
        ]).then(result => {
            if (result.affectedRows) return { id, ...customer };
            throw new Error('cannot find customer id');
        });
    }
    static deleteById(id) {
        return db.query('DELETE FROM customers WHERE id = ?', [id]).then(result => {
            if (result.affectedRows) return result.affectedRows;
            throw new Error('cannot find customer id');
        })
    }
}

module.exports = Customer;

// const db = require('../utils/database');

// class Customer {
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }

//     static findAllCustomer() {
//         return db.execute('SELECT * FROM customers'
//         ).then(
//             ([result]) => { return result }
//         );
//     }

//     static findByIdCustomer(id) {
//         return db.execute('SELECT * FROM customers WHERE id = ?',[
//             id
//         ]).then(
//             ([result]) => { return result.length == 0 ? 'no customer id' : result }
//         );
//     }

//     static createCustomer(Cname, Caddress) {
//         return db.execute('INSERT INTO customers (name, address) VALUE (?, ?)', [
//             Cname,
//             Caddress
//         ]).then(
//             ([result]) => {
//                 if (result.affectedRows) { return { id: result.insertId, name: Cname, address: Caddress } };
//                 throw new Error('cannot create customer at affected rows === 0');
//             }
//         );
//     }

//     static editCustomer(Cname, Caddress, Cid) {
//         return db.execute('UPDATE customers SET name = ?, address = ? WHERE id = ?', [
//             Cname,
//             Caddress,
//             Cid
//         ]).then(
//             ([result]) => {
//                 if (result.affectedRows) { return { id: Cid, name: Cname, address: Caddress } };
//                 throw new Error('cannot edit customer at affected rows === 0');
//             }
//         );
//     }

//     static deletedCustomer(Cid) {
//         return db.execute('DELETE FROM customers WHERE id = ?',[
//             Cid
//         ]).then(
//             ([result]) => {
//                 console.log(result)
//                 if (result.affectedRows) { return  };
//                 throw new Error('cannot delete customer at affected rows === 0');
//             }
//         );
//     }
// }

// module.exports = Customer;
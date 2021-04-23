const db = require('../utils/database');

class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    static findAllCustomer() {
        return db.execute('SELECT * FROM customers'
        ).then(
            ([result]) => { return result }
        );
    }

    static findByIdCustomer(id) {
        return db.execute('SELECT * FROM customers WHERE id = ?',[
            id
        ]).then(
            ([result]) => { return result.length == 0 ? 'no customer id' : result }
        );
    }

    static createCustomer(Cname, Caddress) {
        return db.execute('INSERT INTO customers (name, address) VALUE (?, ?)', [
            Cname,
            Caddress
        ]).then(
            ([result]) => {
                if (result.affectedRows) { return { id: result.insertId, name: Cname, address: Caddress } };
                throw new Error('cannot create customer at affected rows === 0');
            }
        );
    }

    static editCustomer(Cname, Caddress, Cid) {
        return db.execute('UPDATE customers SET name = ?, address = ? WHERE id = ?', [
            Cname,
            Caddress,
            Cid
        ]).then(
            ([result]) => {
                if (result.affectedRows) { return { id: Cid, name: Cname, address: Caddress } };
                throw new Error('cannot edit customer at affected rows === 0');
            }
        );
    }

    static deletedCustomer(Cid) {
        return db.execute('DELETE FROM customers WHERE id = ?',[
            Cid
        ]).then(
            ([result]) => {
                console.log(result)
                if (result.affectedRows) { return  };
                throw new Error('cannot delete customer at affected rows === 0');
            }
        );
    }
}

module.exports = Customer;
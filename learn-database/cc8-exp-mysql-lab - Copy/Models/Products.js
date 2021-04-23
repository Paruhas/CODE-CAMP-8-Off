const db = require('../database/database');

class Product {
    // static findAll() {
    //     return db.query('SELECT * FROM products');
    // }
    // ทำให้รับคำสั่งถ้ามีการขอ sort ข้อมูลได้
    static findAll(options) {
        let sqlOrder = 'ORDER BY ';
        if(options.order) { // [-price, name]
            const orderArr = options.order.map(ord => {
                if (ord.startsWith('-')) return ord.slice(1) + ' DESC';
                return ord;
            }); // ['-price DESC', name]
            sqlOrder = sqlOrder + orderArr.join(', ') //  // price DESC, name
        }

        let sqlLimit = 'LIMIT ';
        if (options.limit) sqlLimit = sqlLimit + options.limit;

        let sql = 'SELECT * FROM products'
        if (options.order) sql = sql + ' ' + sqlOrder;
        if (options.limit) sql = sql + ' ' + sqlLimit;
        
        return db.query(sql);
    }
    static findById(id) {
        return db.query('SELECT * FROM products WHERE id = ?',[id])
        .then(result => result.length ? result[0] : null)
    }
    static create(product) {
        return db.query('INSERT INTO products (name, `desc`, price, quantity, supplier_id) VALUE (?, ?, ?, ?, ?)', [
            product.name,
            product.desc,
            product.price,
            product.quantity,
            product.supplier_id
        ]).then(result => { 
            if (result.affectedRows) return { id: result.insertId, ...product };
            throw new Error('cannot create product: affected rows is zero');
        });
    }
    static updateById(id, product) {
        return db.query('UPDATE products SET name = ?, `desc` = ?, price = ?, quantity = ?, supplier_id = ? WHERE id = ?', [
            product.name,
            product.desc,
            product.price,
            product.quantity,
            product.supplier_id,
            id
        ]).then(result => {
            if (result.affectedRows) return { id, ...product };
            throw new Error('cannot find product id');
        });
    }
    static deleteById(id) {
        return db.query('DELETE FROM products WHERE id = ?', [id]).then(result => {
            if (result.affectedRows) return result.affectedRows;
            throw new Error('cannot find product id');
        })
    }
}

module.exports = Product;
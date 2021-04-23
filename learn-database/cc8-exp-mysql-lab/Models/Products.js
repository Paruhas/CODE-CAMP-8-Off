const db = require('../utils/database');

class Product {
    constructor(name, desc, price, quantity, supplier_id) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.quantity = quantity;
        this.supplier_id = supplier_id;
    }

    static findAllProduct() {
        return db.execute('SELECT * FROM products'
        ).then(
            ([result]) => { return result }
        );
    }



    static createProduct(product) {
        if ( product.desc === undefined ) {
            return db.execute('INSERT INTO products (name, price, quantity, supplier_id) VALUES (?, ?, ?, ?)', [
                product.name,
                product.price,
                product.quantity,
                product.supplier_id
            ]).then(
                ([result]) => { return { 
                    id: result.insertId, product: product.name, price: product.price, quantity: product.quantity, supplier_id: product.supplier_id 
                }}
            );
        } else {
            return db.execute('INSERT INTO products (name, products.desc, price, quantity, supplier_id) VALUES (?, ?, ?, ?, ?)', [
                product.name,
                product.desc,
                product.price,
                product.quantity,
                product.supplier_id
            ]).then(
                ([result]) => { return { 
                    id: result.insertId, desc: product.desc, product: product.name, price: product.price, quantity: product.quantity, supplier_id: product.supplier_id 
                }}
            );
        }

        // ]).then(
        //     ([result]) => {
        //         if (result.affectedRows) { return { id: result.insertId, name: Cname, address: Caddress } };
        //         throw new Error('cannot create product at affected rows === 0');
        //     }
        // );
    }
}

module.exports = Product;
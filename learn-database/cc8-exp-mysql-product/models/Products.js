const db = require('../utils/db');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static findAll() {
        return db.execute('SELECT * FROM products').then( function([result]) { return result }); 
    }

    static findById(id) {
        // console.log(product)
        // console.log(product.id)
        // console.log(id)
        return db.execute('SELECT * FROM products WHERE id = ?',[id]).then( function(res) { return res[0].length ? res[0][0] : null });
    }

    static create(product) {
        return db.execute('INSERT INTO products (name, price) VALUE (?, ?)', [
            product.name, product.price
        // ]).then( ([res]) => this.findById(res.insertId) );
        ]).then( ([res]) => {
            if (res.affectedRows) return { id: res.insertId, name:product.name, price:product.price };
            throw new Error('cannot create product: affected rows == 0')
        } );
    }

    
    // ของ อาจารย์
    static bulkCreate(products) { 
        let sql = 'INSERT INTO products (name, price) VALUES';
        // ต้องทำแบบนี้ แต่ตัว doubble ไข่ มันไม่แน่นอน แล้วแต่ ว่า add กี่ค่า INSERT INTO products (name, price) VALUE (?, ?),(?, ?),(?, ?) ['A',1,'B',2,'C',3]
        const values = [];

        for ({name, price} of products) {
            sql = sql + ' (?, ?),';
            values.push(name, price)
        }

        db.execute(sql.slice(0, -1), values).then( ([result]) => {
            if(result.affectedRows) return result;
            throw new Error('cannot create product: affected rows == 0');
        });
    }


    // static update(product , id) {
    //     return db.execute('UPDATE products SET name = ?, price = ? WHERE id = ?',[
    //         product.name, product.price, id.id
    //     ]);
    // }
    // ของ อาจารย์
    static updateById(id, product) { 
        return db.execute('UPDATE prodcuts SET name = ?, price = ? WHERE id = ?',[
            product.name, product.price, id 
        ]).then ( ([result]) => {   
            if (result.affectedRows) return { id, ...product };
            throw new Error('product id is not found'); 
        }); 
    }

    // static delete(id) {
    //     return db.execute('DELETE FROM   products WHERE id = ?',[id]).then( (res) => console.log(res));
    // }
    // ของ อาจารย์
    static deleteById(id) {
        return db.execute('DELETE FROM products WHERE id = ?', [id])
        .then(([res]) => {
            if (res.affectedRows) return res.affectedRows;
            throw new Error('cannot delete product: affected rows == 0, product id is not found');
        });
    }

    save() { 
        return db.execute('INSERT INTO products (name, price) VALUE (?, ?)', [
            this.name, this.price
        ]).then( ([res]) => { 
            // if (res.affectedRows) return { id: res.insertId, name: this.name, price:this.price };
            if (res.affectedRows) { this.id = res.insertId;  return this; } 
            throw new Error('cannot creat product: affected rows == 0') 
        });
    }
}

module.exports = Product;
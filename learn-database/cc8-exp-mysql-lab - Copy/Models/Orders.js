const db = require('../database/database');

const Product = require('./Products');
const OrderItem = require('./OrderItem')

// req.body > item ต้องส่งเป็น ARR-OBJ (ต้องส่งข้อมูลให้ครบ มี customer_id employee_id เป็น FK ต้องใส่ข้อมูลเพิ่มด้วย และต้องอ้างอิงถึง Item ที่กล่าวถึงด้วย)

class Order{
    static findById(id) {
        // return db.query('SELECT * FROM orders AS o1 JOIN order_items AS o2 ON o1.id = o2.order_id WHERE o1.id = ?', [
        //     id
        // ]);
        // // ผลออกมา มีการ merge กันเนื่องจาก หัวตาราง มีค่าเหมือนกัน (ถ้ามีซ้ำกัน จะเอาอันขวาสุด) ต้องเปลี่ยนการ execute ใหม่ 
        // const sql = 'SELECT * FROM orders AS o1 JOIN order_items AS o2 ON o1.id = o2.order_id WHERE o1.id = ?'; // ก่อนแก้ JOIN
        const sql = 'SELECT o1.date AS transactionDate, p.name , o2.amount, o2.price FROM orders AS o1 JOIN order_items AS o2 ON o1.id = o2.order_id JOIN products AS p ON o2.product_id = p.id WHERE o1.id = ?';
        // return db.pool.execute({ sql: sql, values: [id], nestTables: true })
        // return db.pool.execute({ sql: sql, values: [id], nestTables: '_' })  // ทำให้แยกออกจากกันแบบ useful ; ยังบอกข้อมูลไม่ครบ > เอาไป JOIN ต่อ > แก้ คำสั่ง sql เพิ่มอีก ; และ เปลี่ยน * > เป็นแค่ข้อมูลที่ต้องการเท่านั้น ; nest คือการเอาชื่อของตาราง column นั้นๆมาด้วย
        return db.pool.execute({ sql: sql, values: [id]})
        // ควรทำให้ออกมาเป็นผลลัพธ์สุดท้ายที่ frontEnd ใช้งานได้เลย (หรือตามที่คุยตกลงกัน)
        .then(([result]) => result);
    }

    static create(order) {
        return db.query('INSERT INTO orders (customer_id, employee_id, date) VALUE (?, ?, ?)',[
            order.customerId,
            order.employeeId,
            new Date()
        ]).then(result => {
            if (result.affectedRows) return { id: result.insertId, ...order, date: new Date() };
            throw new Error('cannot create order: affected rows is zero');
        });
    }

    static getTotalSale() {
        return db.query('SELECT SUM(amount) AS totalAmount, SUM(amount * price * (1 - discount)) AS totalSale FROM order_items')
    }

    static async completeOrder(order, orderItems) { // create Order & OrderItem พร้อมกัน 
        let connection = null;
        try {
            connection = await db.pool.getConnection();
            await connection.beginTransaction(); // ครอบช่วง transaction ไว้
            const newOrder = await this.create(order); // คำสั่งสร้าง newOrder 

            // กำหนดช่วง transaction ขึ้นมา เมื่อทำสำเร็จ แล้วสั่ง commit เข้า database แต่ถ้าเจอ error มันจะ rollback ก่อนที่จะ เปลี่ยนแปลง database ของเรา

            for ( let item of orderItems ) {
                const product = await Product.findById(item.productId);
                // console.log(product)
                // console.log(product.price)
                await OrderItem.create({ 
                    orderId: newOrder.id,
                    amount: item.amount, 
                    price: product.price, 
                    discount:item.discount ? item.discount : 0,
                    productId: item.productId
                });
            }
            
            await connection.commit();
            return newOrder;
        } catch(err) {
            // console.log(err);
            await connection.rollback(); // ประกาศ connection ไว้ข้างนอก เพื่อให้ rollback ตอนจับ error เจอ
        } finally {
            await connection.release();
        }
    }
}

module.exports = Order;
const db = require('../database/database');

// เพื่อให้เวลาสร้าง order ใหม่ขึ้นมา จะต้องทำ order_item ใหม่ขึ้นมาด้วย

class OrderItem {
    static create(orderItem) {
        // console.log(orderItem.orderId)
        // console.log(orderItem.amount)
        // console.log(orderItem.price)
        // console.log(orderItem.discount)
        // console.log(orderItem.productId)
        return db.query('INSERT INTO order_items (order_id, amount, price, discount, product_id) VALUES (?, ?, ?, ?, ?)',[
            orderItem.orderId,
            orderItem.amount,
            orderItem.price,
            orderItem.discount,
            orderItem.productId
        ]).then(result => {
            if (result.affectedRows) return {id: result.insertId, ...orderItem };
            throw new Error('cannot create order item: affected rows is zero');
        });
    }
}

module.exports = OrderItem;
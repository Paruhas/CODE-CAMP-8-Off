// const db = require('../models/index') // ละ index ก็ได้ default ของ codeer มันจะไปหา index.js เสมอ
const { Order, OrderItem, Customer, Employee, Product, Supplier, sequelize } = require('../models/index') // detructoring จะได้ไม่ต้อง db.Order.Fn > เป็นแค่ Order.Fn พอ
// sequelize มาจาก index.js เช่นกัน เป็น Fn ที่ Config ให้แล้ว
const { QueryTypes } = require('sequelize'); // Import เมื่อใช้ raw SQL

getAllOrders = async (req, res, next) => {
    try {
        // console.log(db);
        // console.log(Order);
        const orders = await Order.findAll({ 
            include: [
                {
                    model: OrderItem,
                    include: { 
                                model: Product,
                                attributes: ['id','name']
                            },
                    attributes: ['id','amount','price','discount']
                }, 
                {
                    model: Customer,
                    attributes: ['id','name']
                }, 
                {
                    model: Employee,
                    attributes: ['id','name']
                }
            ],
            attributes: ['id','date']
        });
        res.status(200).json({ orders });
    } catch(err) {
        next(err);
    }
};

getOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const order = await Order.findOne({ where: { id },
                include: [
                    {
                        model: OrderItem,
                        attributes: ['id','amount','price','discount'],
                        include: { 
                                    model: Product,
                                    attributes: ['id','name'],
                                    include: { 
                                        model: Supplier
                                    }
                                }   
                    }, 
                    {
                        model: Customer,
                        attributes: ['id','name']
                    }, 
                    {
                        model: Employee,
                        attributes: ['id','name']
                    }
                ],
                attributes: ['id','date']
        });
        res.status(200).json({ order });
    } catch(err) {
        next(err);
    }
};
 
createOrder = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    try {
        const { customerId, employeeId, items } = req.body; // ต้องส่ง items มาเป็น ARR เท่านั้น ; items = [{productId, amount, discount}]
        const newOrder = await Order.create({ date: new Date(), customerId, employeeId } , { transaction: transaction }); // new Date() ได้เลย เพราะ ตัวตาราง กำหนด type: DataTypes.DATEONLY, ไว้แล้ว

        // [ { ProductId, orderId, amount, price, discount } ] เราต้องการสร้าง items แบบนี้ขึ้นมา ; แต่เรากรอกข้อมูลผ่าน req.body มาแค่ items = [{productId, amount, discount}] ต้องแทรก orderId, price เข้าไป โดยการใช้ Fn .map
        // // วิธี map > bulkCreate
        // const insertItems = await Promise.all(
        //     items.map( async item => {
        //         const product = await Product.findByPk(item.productId); // เอา Table Product มา JOIN แล้วเอาค่า Price มาใช้ โดยตรงกับ ProductId ที่ส่งมาจาก req.body
        //         item.price = product.price;
        //         item.orderId = newOrder.id;
        //         return item; // ออกมาเป็น ARR ของ Promise pending > ใช้ await Promise.all() ครอบเข้าไป เพื่อรอให้เสร็จจะได้ออกมาเป็น Promise แบบที่มีค่าให้เราเอาไปใช้ได้
        //     })
        // );
        // // console.log(insertItems);

        // const newOrderItems = await OrderItem.bulkCreate(insertItems , { transaction: transaction }); // สามารถใส่ ARR เข้าไป เพื่อ create รอบเดียวได้เลย ; create ปกติ ทำได้แค่ทีละ row

        // // วิธี for of
        const newOrderItems = [];
        for (let item of items) {
            const product = await Product.findByPk(item.productId);
            const newOrderItem = await OrderItem.create({
                    productId: item.productId,
                    amount: item.amount,
                    discount: item.discount,
                    price: product.price,
                    orderId: newOrder.id
                },
                {
                    transaction:transaction
                }
            );
            newOrderItems.push(newOrderItem); // ทำเพื่อให้แสดงค่าใน POSTMAN
        };


        await transaction.commit();
        // console.log(JSON.parse(JSON.stringify(newOrder)));

        res.status(201).json({ newOrder, newOrderItems });
    } catch(err) {
        await transaction.rollback();
        next(err);
    }
};
 
editOrder = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    try {
        // const { customerId, employeeId, items } = req.body; // ต้องส่ง items มาเป็น ARR เท่านั้น ; items = [{productId, amount, discount}]
        // const newOrder = await Order.create({ date: new Date(), customerId, employeeId } , { transaction: transaction }); // new Date() ได้เลย เพราะ ตัวตาราง กำหนด type: DataTypes.DATEONLY, ไว้แล้ว

        // // [ { ProductId, orderId, amount, price, discount } ] เราต้องการสร้าง items แบบนี้ขึ้นมา ; แต่เรากรอกข้อมูลผ่าน req.body มาแค่ items = [{productId, amount, discount}] ต้องแทรก orderId, price เข้าไป โดยการใช้ Fn .map
        // // // วิธี map > bulkCreate
        // // const insertItems = await Promise.all(
        // //     items.map( async item => {
        // //         const product = await Product.findByPk(item.productId); // เอา Table Product มา JOIN แล้วเอาค่า Price มาใช้ โดยตรงกับ ProductId ที่ส่งมาจาก req.body
        // //         item.price = product.price;
        // //         item.orderId = newOrder.id;
        // //         return item; // ออกมาเป็น ARR ของ Promise pending > ใช้ await Promise.all() ครอบเข้าไป เพื่อรอให้เสร็จจะได้ออกมาเป็น Promise แบบที่มีค่าให้เราเอาไปใช้ได้
        // //     })
        // // );
        // // // console.log(insertItems);

        // // const newOrderItems = await OrderItem.bulkCreate(insertItems , { transaction: transaction }); // สามารถใส่ ARR เข้าไป เพื่อ create รอบเดียวได้เลย ; create ปกติ ทำได้แค่ทีละ row

        // // // วิธี for of
        // const newOrderItems = [];
        // for (let item of items) {
        //     const product = await Product.findByPk(item.productId);
        //     const newOrderItem = await OrderItem.create({
        //             productId: item.productId,
        //             amount: item.amount,
        //             discount: item.discount,
        //             price: product.price,
        //             orderId: newOrder.id
        //         },
        //         {
        //             transaction:transaction
        //         }
        //     );
        //     newOrderItems.push(newOrderItem); // ทำเพื่อให้แสดงค่าใน POSTMAN
        // };


        await transaction.commit();
        // console.log(JSON.parse(JSON.stringify(newOrder)));

        res.status(201).json({ newOrder, newOrderItems });
    } catch(err) {
        await transaction.rollback();
        next(err);
    }
};
 
deleteOrder = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    try {
        const { id } = req.params;
        await OrderItem.destroy( { where: { orderId: id } }, { transaction:transaction } ); // ต้องลบตัวลูกที่มี FK ก่อน ไม่งั้นติด RESTRICT ที่ setting ไว้ > แล้วค่อยลบแม่
        await Order.destroy( { where: { id: id } }, { transaction:transaction } )
        await transaction.commit();
        res.status(204).json();
    } catch(err) {
        await transaction.rollback();
        next(err);
    }
};

getTotalSale = async (req, res, next) => {
    try {
        // const result = await sequelize.query(
        //     'SELECT SUM(amount) AS `totalAmount`, SUM(price*amount*(1-discount)) AS `totalSales` FROM order_items',
        //     { type: QueryTypes.SELECT }
        // );

        const total = await OrderItem.findAll({
            // group : ['id'],
            attributes: [ 
                // 'id',
                [ sequelize.fn ( 'SUM' , sequelize.col ('amount') ), 'totalAmount'], 
                [ sequelize.fn ( 'SUM' , sequelize.literal ('price * amount * ( 1 - discount ) ') ), 'totalSale' ] ]
        });

        // console.log(result);
        res.status(200).json( total );
    } catch(err) {
        next(err);
    } 
};

getTotalSaleEachCustomer = async (req, res, next) => {
    try {
        const result = await sequelize.query (`SELECT c.id, c.name, SUM(o2.amount) AS totalAmount, 
        SUM(o2.amount * o2.price * (1 - o2.discount) ) AS totalSale
        FROM customers AS c LEFT JOIN orders AS o1 ON c.id = o1.customer_id
        LEFT JOIN order_items AS o2 ON o1.id = o2.order_id
        GROUP BY c.id`, // LEFT JOIN เอาข้อมูล customers ที่ไม่เคยซื้อมาด้วย
        { type: QueryTypes.SELECT })

        const total = await Customer.findAll({
            attributes: [
                'id',
                'name',
                [ sequelize.fn ( 'SUM' , sequelize.col ('amount') ), 'totalAmount' ],
                [ sequelize.fn ( 'SUM' , sequelize.literal ('price * amount * ( 1 - discount ) ') ), 'totalSale' ]
        ],
            include: {
                model: Order,
                attributes: [],
                include: {
                    model: OrderItem,
                    attributes: []
                }
            },
            group: ['id'],
        })

        res.status(200).json({ total });
    } catch(err) {
        next(err);
    }
};

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    editOrder,
    deleteOrder,
    getTotalSale,
    getTotalSaleEachCustomer
};
const OrderItem = require('../Models/OrderItem');
const Order = require('../Models/Orders');
const Product = require('../Models/Products');

getOrder = ( async (req, res, next) => {
    // ตามความจริงคงไม่ต้องการทั้งหมด น่าจะดูแค่แต่ละ Id เพราะฉะนั้นต้องทำการ JOIN ตารางด้วย ไม่ต้องแยก All / byId ทำแค่ byId พอ 
   try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json({ order })
   } catch(err) {
        next(err);
   }
});

getTotalSale = ( async (req, res, next) => {
    try {
        const result = await Order.getTotalSale();
        res.status(200).json({ result });
    } catch {
        next(err);
    }
})


createOrder = ( async (req, res, next) => {
    try {
        const { customerId , employeeId , items } = req.body;

        if ( !customerId ) return res.status(400).json({message: 'customer Id is required'});
        if ( !Array.isArray(items) || !items.length ) return res.status(400).json({ message: 'item must be an array and have at least 1 record' });
        for ( let item of items ) {
            if ( !item.productId )
                return res.status(400).json({ message: 'product Id is required' });
            if ( item.amount === undefined )
                return res.status(400).json({ message: 'amount is required' });
            if ( !(+item.amount > 0) ) return res.status(400).json({ message: 'amount must be numeric and greater than zero' });
            if ( item.discount && !(+item.discount > 0) ) return res.status(400).json({ message: 'discount must be numeric and greater than zero' });
            if ( item.discount && +item.discount > 1 ) return res,status(400).json({ message: 'discount must less than 1' });
        }

        const order = await Order.completeOrder({
            customerId,
            employeeId: employeeId ? employeeId : null
        }, items);
        
        res.status(201).json({ order });
        
        // // คำสั่ง POSTMAN
        // {
        //     "customerId": 1,
        //     "employeeId": 20,
        //     "items": [
        //         {
        //             "productId": 1,
        //             "amount": 2,
        //             "discount": 0.05
        //         },
        //         {
        //             "productId": 3,
        //             "amount": 2,
        //             "discount": 0.05
        //         },
        //         {
        //             "productId": 5,
        //             "amount": 2,
        //             "discount": 0.05
        //         }
        //     ]
        // }
        

    } catch(err) {
        next(err);
    }
});

editOrder = ( async (req, res, next) => {

});

deleteOrder = ( async (req, res, next) => {

});



module.exports = {
    getOrder,
    getTotalSale,
    createOrder,
    editOrder,
    deleteOrder
};
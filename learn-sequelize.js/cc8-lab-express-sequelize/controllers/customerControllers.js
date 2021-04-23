// const db = require('../models/index') // ละ index ก็ได้ default ของ codeer มันจะไปหา index.js เสมอ
const { Customer } = require('../models/index') // detructoring จะได้ไม่ต้อง db.Customer.Fn > เป็นแค่ Customer.Fn พอ

getAllCustomers = async (req, res, next) => {
    try {
        // console.log(db);
        const customers = await Customer.findAll();
        res.status(200).json({ customers });
    } catch(err) {
        next(err);
    }
};

getCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findOne({ where: { id }});
        res.status(200).json({ customer });
    } catch(err) {
        next(err);
    }
};
 
createCustomer = async (req, res, next) => {
    try {
        const { name, address } = req.body;
        const newCustomer = await Customer.create({ name: name, address:address });
        res.status(201).json({ newCustomer });
    } catch(err) {
        next(err);
    }
};
 
editCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, address } = req.body;
        const editCustomer = await Customer.update(
             { name: name , 
              address:address }, 
             { where: { id:id }} 
        );
        // console.log(editCustomer == 1)
        res.status(200).json({ message: editCustomer == 1 ? {id:id, name: name , address:address } : 'no update customer' });
    } catch(err) {
        next(err);
    }
};
 
deleteCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCustomer = await Customer.destroy(
            { where: { id } }
        );
        res.status(204).json({});
    } catch(err) {
        next(err);
    }
};

module.exports = {
    getAllCustomers,
    getCustomer,
    createCustomer,
    editCustomer,
    deleteCustomer,
};
const Customer = require('../Models/Customers');

exports.getAllCustomer = async(req, res, next) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({ customers });
    } catch(err) {
        next(err)
    }
};

exports.getCustomer = async(req, res, next) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById(id);
        res.status(200).json({ customer });
    } catch(err) {
        next(err)
    }
};

exports.createCustomer = async(req, res, next) => {
    try {
        const { name , address } = req.body;
        if ( !name || !name.trim() ) return res.status(400).json({message: 'name is required'});
        if ( !address || !address.trim() ) return res.status(400).json({message: 'address is required'});

        const customer = await Customer.create({ name, address });
        res.status(201).json({ customer });
    } catch(err) {
        next(err);
    }
};

exports.updateCustomer = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name , address } = req.body;
        if ( !name || !name.trim() ) return res.status(400).json({message: 'name is required'});
        if ( !address || !address.trim() ) return res.status(400).json({message: 'address is required'});

        const customer = await Customer.updateById(id, { name, address });
        res.status(200).json({ customer });
    } catch(err) {
        next(err);
    }
};

exports.deleteCustomer = async(req, res, next) => {
    try {
        const { id } = req.params;
        await Customer.deleteById(id);
        res.status(204).json();
    } catch(err) {
        next(err);
    }
};




















// const { json } = require('express');
// const Customer = require('../Models/Customers');


// getAllCustomer = ( async (req, res, next) => { 
//     try {
//         const customers = await Customer.findAllCustomer();
//         res.status(200).json({ 'All customer': customers });
//     } catch(err) {
//         next(err);
//     }
// });

// getCustomerById = ( async (req, res, next) => { 
//     try {
//         const { id } = req.params;
//         const customer = await Customer.findByIdCustomer(id);
//         res.status(200).json({ 'Customer': customer });
//     } catch(err) {
//         next(err);
//     }
// });

// createCustomer = ( async (req, res, next) => { 
//     try {
//         const { name, address } = req.body;

//         if ( !name || !name.trim() ) return res.status(400).json({message: 'name is required'});
//         if ( !address || !address.trim() ) return res.status(400).json({message: 'address is required'});

//         const customer = await Customer.createCustomer(name, address);
//         res.status(201).json({ 'Customer create successful': customer });
//     } catch(err) {
//         next(err);
//     }
// });

// editCustomer = ( async (req, res, next) => { 
//     try {
//         const { name, address } = req.body;
//         const { id } = req.params

//         if ( !name || !name.trim() ) return res.status(400).json({message: 'name is required'});
//         if ( !address || !address.trim() ) return res.status(400).json({message: 'address is required'});
//         if ( isNaN(id) ) return res.status(400).json({message: 'id must be numeric'});

//         const newCustomer = await Customer.editCustomer(name, address, id);
//         res.status(200).json({ 'Customer Update at': newCustomer });
//     } catch(err) {
//         next(err);
//     }
// });

// deleteCustomer = ( async (req, res, next) => { 
//     try {
//         const { id } = req.params;

//         if ( isNaN(id) ) return res.status(400).json({message: 'id must be numeric'});

//         const customer = await Customer.findByIdCustomer(id);
//         await Customer.deletedCustomer(id);
//         res.status(200).json({ 'Deleted customer':customer });
//     } catch (err) {
//         next(err);
//     }
// });


// module.exports = {
//     getAllCustomer,
//     getCustomerById,
//     createCustomer,
//     editCustomer,
//     deleteCustomer
// };
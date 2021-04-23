const db = require('../utils/database');

class Order{
    constructor(date, customer_id, employee_id) {
        this.date = date;
        this.customer_id = customer_id;
        this.employee_id = employee_id;
    }

}

module.exports = Order;
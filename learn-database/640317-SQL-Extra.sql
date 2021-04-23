-- CREATE DATABASE ecommerce

-- SELECT * FROM ecommerce.customers WHERE name LIKE 'บ%' ;

-- SELECT * FROM ecommerce.customers WHERE address LIKE '%กรุงเทพ' ;

-- SELECT * FROM ecommerce.customers GROUP BY address HAVING count(address) > 1 ;
-- SELECT id, name, address, count(id) FROM customers GROUP BY address ORDER BY count(id) DESC ;
-- SELECT address, count(id) FROM customers 
-- WHERE address LIKE '%กรุงเทพ' 
-- GROUP BY address ORDER BY count(id) DESC ;

-- SELECT * FROM customers JOIN orders ON customers.id = orders.customer_id 
-- WHERE customers.name = 'นัท';

-- SELECT customers.name , count(customers.id) as order_number FROM customers 
-- JOIN orders ON customers.id = orders.customer_id 
-- GROUP BY customers.id ORDER BY count(id) DESC ;

-- SELECT orders.date , count(orders.date) as amount FROM orders
-- GROUP BY orders.date ;

-- SELECT orders.date, customers.id, customers.name, count(customers.id) as amount FROM orders
-- JOIN customers ON orders.customer_id = customers.id
-- GROUP BY orders.date,customers.name ORDER BY date

-- SELECT * FROM order_items as oi
-- JOIN orders as o ON oi.order_id = o.id
-- JOIN customers as c ON o.customer_id = c.id
-- GROUP BY oi.product_id

-- SELECT * , count( o.customer_id ) as total_order ,sum( ( oi.price * oi.amount ) * ( 1 - oi.discount ) ) as total FROM order_items as oi
-- JOIN orders as o ON oi.order_id = o.id
-- JOIN customers as c ON o.customer_id = c.id
-- GROUP BY c.id ORDER BY c.id

SELECT * , sum( ( oi.price * oi.amount ) * ( 1 - oi.discount ) ) as amount_per_product ,
sum(oi.amount) as amount
FROM order_items as oi
JOIN orders as o ON oi.order_id = o.id
JOIN customers as c ON o.customer_id = c.id
JOIN products as p ON oi.product_id = p.id
GROUP BY p.name
-- SELECT * FROM banking.branch;

-- SELECT a.account_number FROM account as a, branch as b WHERE a.branch_name = b.branch_name AND b.branch_city = 'Riverside'
-- SELECT * FROM account as a JOIN branch as b ON a.branch_name = b.branch_name WHERE b.branch_city = 'Riverside'

-- SELECT * FROM branch JOIN account ON branch.branch_name = account.branch_name WHERE branch.branch_name = 'A' OR  branch.branch_name = 'B' ORDER BY branch.branch_name

-- SELECT customer_name, SUM(account_number) FROM depositor GROUP BY customer_name

SELECT depositor.customer_name , SUM(balance) FROM depositor JOIN account ON depositor.account_number = account.account_number GROUP BY customer_name



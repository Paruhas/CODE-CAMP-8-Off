-- SELECT * FROM sailors where age > 30 AND rating > 5
-- SELECT sid, sname FROM sailors where age > 30 AND rating > 5
-- SELECT sid, sname FROM sailors where age > 30 OR rating > 5
-- SELECT * FROM sailors where age > 30 OR rating > 5 ORDER BY age DESC
-- SELECT DISTINCT sname FROM sailors ORDER BY age DESC

-- SELECT DISTINCT sname, age FROM sailors

-- SELECT * FROM sailors JOIN reserves ON sailors.sid = reserves.sid 
-- SELECT * FROM sailors LEFT JOIN reserves ON sailors.sid = reserves.sid 
-- SELECT * FROM sailors JOIN reserves ON sailors.sid = reserves.sid AND reserves.bid = 103

-- SELECT * FROM sailors JOIN reserves ON sailors.sid = reserves.sid WHERE (bid = 102) OR (bid = 104)

-- SELECT * FROM sailors JOIN reserves ON sailors.sid = reserves.sid JOIN boats ON reserves.bid = boats.bid WHERE sname = 'Lubber'
-- SELECT sailors.sid, reserves.bid, sailors.sname, boats.color FROM boats JOIN reserves ON boats.bid = reserves.bid JOIN sailors ON sailors.sid = reserves.sid WHERE sailors.sname = BINARY 'Lubber'

-- SELECT DISTINCT sailors.sid ,sailors.sname FROM sailors JOIN reserves ON sailors.sid = reserves.sid

-- SELECT s.sname as sailor_name, r.day as reserves_date FROM sailors as s JOIN reserves as r ON s.sid = r.sid

-- SELECT sname FROM sailors WHERE sname LIKE '%A%'

-- SELECT * FROM sailors JOIN reserves ON sailors.sid = reserves.sid JOIN boats ON reserves.bid = boats.bid WHERE color = BINARY 'Red' OR color = BINARY 'Green'
-- SELECT * FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON r.bid = b.bid WHERE b.color = BINARY 'Red' OR b.color = BINARY 'Green' OR b.color = BINARY 'Orange' OR b.color = BINARY 'Yellow'
-- SELECT * FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON r.bid = b.bid WHERE b.color IN ('Red', 'Green' , 'Yellow' )

-- SELECT s.sname , s.sid , b.color FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON b.bid = r.bid WHERE b.color = 'Red' 
-- UNION
-- SELECT s.sname , s.sid , b.color FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON b.bid = r.bid WHERE b.color = 'Green'

-- SELECT * FROM sailors WHERE sid IN 
-- (SELECT distinct s.sid FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON b.bid = r.bid WHERE b.color = 'Red')
-- AND sid IN
-- (SELECT distinct s.sid FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON b.bid = r.bid WHERE b.color = 'Green')

-- SELECT * FROM sailors, reserves, boats
-- SELECT * FROM sailors as s, reserves as r, boats as b WHERE s.sid = r.sid AND r.bid = b.bid
-- SELECT COUNT(*) FROM sailors WHERE age > 45
-- SELECT SUM(age) FROM sailors
-- SELECT AVG(age) as avg_age FROM sailors
-- SELECT MAX(age) as max_age FROM sailors
-- SELECT MIN(age) as min_age FROM sailors

-- SELECT SUM(age) FROM sailors WHERE rating = 10

-- SELECT sname , age as oldest_age FROM sailors WHERE age = ( SELECT MAX(age) FROM sailors )
-- SELECT sname , age FROM sailors ORDER BY age DESC



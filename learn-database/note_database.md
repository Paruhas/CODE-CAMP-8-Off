DATABASE

กลุ่มของข้อมูลที่มีความสัมพันธ์กัน นำมาเก็บรวบรวมเข้าไว้ด้วยกันอย่างมีระบบ เช่น ชื่อ-นามสกุล ที่อยู่ หมายเลขโทรศัพท์ ข้อมูลคลังสินค้า เป็นต้น
ทำการเก็บข้อมูลเป็นตาราง





การออกแบบฐานข้อมูลเบื้องต้น

Requirements Analysis สำคัญสุด > คุยกับลูกค้า สอบถามข้อมูล สิ่งที่ลูกค้าต้องการ เว็บเกี่ยวกับอะไร > ต้องเข้าใจ Bussiness Model ; Data ที่ต้องเก็บ และกระบวนการที่กระทำกับ Data ตัวนั้น
ข้อมูลที่ซับซ้อนควรแยกออกมาเป็น อีกชุดนึง ลดความซ้ำซ้อนการใช้งาน

Conceptual Database Design
Logical Database Design
Schema Refinement
Physical Database Design
Application and Security Design

แบบจำลองในแบบรูปภาพ อธิบายคสพ.ของข้อมูล ; จาก table => รูปภาพ
ประกอบด้วย Entity Attribute และ Relationship 
Entity คือ 1 Row ; หลาย Entity = Entity set == Table ทั้งหมด
Attribute คือ Colum ; คือ คุณสมบัติของ Entity ; เช่น ชื่อ นามสกุล อายุ เพศ 
    Domain หรือ Value set คือ สิ่งที่บอกว่า  Attribute นี้ สามารถเป็นอะไรได้บ้าง เช่น ชื่อ คอสเรียน / เพศ
    Attribute Constraint คือ ข้อจำกัดของ Attribute เช่น อายุต้องเป็นตัวเลขเท่านั้น รหัสนิสิตต้องห้ามมีค่าซ้ำกัน ; สามารถเป็น null ได้ ท่ายังไม่รู้ค่า ; ห้ามเป็น null ก็ == Constraint
    แบ่งได้ 3 แบบ
        Simple และ Composite attribute
            Simple ไม่สามารถแยกเป็นส่วนย่อยๆได้ เช่น รหัสนิสิต เพศ
            Composite แยกเป็นส่วนย่อยๆได้ เช่น Full name , Full Adress
        Single – valued และ Multi – valued attribute
            Single Entity ที่มีค่าเดียว
            Multi Entity มีหลายค่า (ต้องแยกtableออกมา)
        Stored และ Derived attribute
            Stored ค่าที่เก็บอยู่ในฐานข้อูล
            Derived ค่าหามาจากการคำนวน Attribute เช่น อายุ(จากวันเกิด) BMI(จากนน. สส.)

Relationship คือ คสพ.ระหหว่าง Table (Entity set)
    เช่น อาจารย์เป็นที่ปรึกษากับนิสิต โดยมีกำหนดระยะเวลา เช่น ตลอดปี 2020 เป็นต้น
    ความสัมพันธ์ระหว่าง Entiry set
        Unary
            คสพ.ในตัวมันเอง (เช่น จะเรียนคอส ชีวะ2 ได้ ต้องผ่าน ชีวะ1 มาก่อน)
        Binary
            Entity 2 อันมีคสพ.กัน (นักเรียน กับ เบอร์โทร)
        Ternary
            Entity 3 อัน มีคสพ.กัน
    Constraints บน Relationships คือการระบุความสัมพันธ์ของ Entity Set แบ่งออกเป็น 2 ประเภท
        Maximum Cardinality (Ratio Constraints)
            One-One , One-Many , Many-One , Many-Many
        Minimum Cardinality (Participation Constraints)
            Total จำเป็นต้องมี เช่น คอส จำเป็นต้องมี ครู > teacher id เป็น null ไม่ได้ ;
            Partial ไม่จำเป็นต้องมี เช่น แต่ ครู ไม่จำเป็นต้อง สอน ก็ได้

Keys
    Super Key คือ Attribute หรือ กลุ่ม Attribute ซึ่งมีต่าแตกต่างกันไป ในแต่ละ Entity และระบุแยกแยะความแตกต่างแต่ละตัวได้
    Candidate Key คือ Subset ที่เล็กที่สุดของ Super Key ที่สามารถระบุเฉพาะ Entity นั้นได้
    Primary Key คือ Candidate Key ที่ถูกเลือกให้เป็นตัวระบุ Identity Entity เฉพาะตัว
    Foreign Key คือ ตัวเชื่อมโยง ตารางนึง ไปอีก ตารางนึง (เป็น Primay ของอีก ตารางนึงเท่านั้น) ; เป็น null ได้

Strong Entity and Weak Entity
    Strong Entity คือ Entity ทั่ว ๆ ไป ที่มี Attribute หนึ่งแยกความแตกต่างของข้อมูลได้ เช่น Entity Student มี Student Id แยกความแตกต่างได้
    Weak Entity คือ Entity ที่ต้องอาศัย Attribute จาก Entity อื่นมาช่วยในแยกความแตกต่างของข้อมูล เช่น Entity การลงทะเบียนเรียน

* | จำเป็นต้องมี /  O == optional มีหรือไม่มีก็ได้ / มองมุมกลับลูกศร





SQL

Structured Query Language ใช้จัดการฐานข้อมูลโครงสร้างที่แน่นอน ใช้กับระบบฐานข้อมูลเชิงสัมพันธ์
MySQL ทำให้เราเขียน/จัดการ SQL ได้ง่ายชึ้น

สร้างก้อน Schemas ใหม่ เขียนคำสั่ง CREATE DATABASE <DatabaseName>; แล้วกดรูปฟ้าผ่า ในการ RUN คำสั่ง (ลากครอบคำสั่งที่ต้องการ run หรือกดเลยจะ run ทั้งหมด) ; กดแถบซ้าย Schemas แล้วกด refresh เพื่ออัพเดตข้อมูล 
run USE <DatabaseName>; ตัว Schemas จะ focus ให้เรา(เน้นดำ) เป็นการ switching focus database (ใช้ double-click เอาก็ได้)
* -- comment // ctrl + / แต่มันจะ -- ตรงที่ I เราอยู่ทันที (ครอบก่อนกด)


สร้างตารางใหม่ 
CREATE TABLE table_names (
   		column_name1 datatype (size) constraint,
   		column2 datatype (size) constraint,
   		column3 datatype (size) constraint,
   		....
   		columnN datatype (size) constraint,
   		PRIMARY KEY( one or more columns )
);
ชื่อหัวตาราง ( <ข้อมูลในคอลัมN ชนิดข้อมูล () เงื่อนไข> , < ขึ้นบรรทัดใหม่+ข้อมูลใหม่ ขั้นด้วย , > , ระบุPRIMARY KEY( 1 หรือมากกว่า ) )
* นิยมตั้งหัวตารางเป็นแบบเติม s, es
* firstName ในนี้เขียนเป็น first_name
* ctrl + d == clone บรรทัด ไปขึ้นบรรทัดใหม่


2.2.  Constraints เงื่อนไข
NOTNULL → Column นั้นห้ามเป็น NULL
UNIQUE → Column นั้นห้ามมีค่าที่ซ้ำกัน (unique)
PRIMARY KEY → เป็น Column(s) Primary key (NOTNULL + UNIQUE) มีไว้เพื่อให้ง่ายต่อการเข้าถึงและง่ายต่อการค้นหา
FOREIGN KEY → เป็น KEY ที่อ้างถึงตารางอื่น (PRIMARY KEY ของตารางอื่น)
CHECK → ตั้งเงื่อนไขแบบ Specific
DEFAULT  → ตั้งค่าเริ่มต้นให้กับ Column(s) นั้น


* หลัง PRIMARY KEY กำหนด FOREIGN KEY ต่อได้
CREATE TABLE districts (
	id INT AUTO_INCREMENT NOT NULL,
	province_id INT NOT NULL,
	name_th VARCHAR(30) NOT NULL,
	name_en VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (province_id) REFERENCES province (id)
)
FOREIGN KEY ( ข้อมูลในตารางนี้ ) REFERENCES < ตารางที่ Ref ถึง ( ข้อมูลในตารางที่ ref) >

UNIQUE keys อันเดียว vs หลายอัน
UNIQUE( ข้อมูลในตารางนี้ )
CONSTRAINT < กำหนดชื่อตัวแปร( อะไรก็ได้ไม่ได้ไม่ใช้ต่อ? ; ห้ามซ้ำกันด้วย ) > UNIQUE ( ข้อมูลในตารางนี้ , ข้อมูลในตารางนี้ )

แก้ไขค่าตาราง กดรูปประแจตรงตารางได้เลย หรือ ผ่าน cmd ด้วยคำสั่ง
ALTER TABLE < ชื่อตาราง >
    ADD < ขื่อคอลัม > < ชนิดDATA >
    DROP COLUMN < ขื่อคอลัม >
    MODIFY COLUMN < ขื่อคอลัม > < ชนิดDATA >

FOREIGN KEY OPTION ตั้งว่าเกิดอะไรขึ้นมื่อมีการ deleted / updaate ตัว KEY นั้นๆ 
- cascade แก้หมดเลย
- restrict ลบที่ตัวลูกก่อน ถึงลบตัวแม่ได้
- no action ไม่ทำอะไรเลย
- set null ทำให้เป็น null เลย

สร้างข้อมูลด้วย Tool ของโปรแกรมก็ได้ (ไม่ต้องพิมพ์ command line)
* utf8mb4 ใหม่กว่า ทำอะไรได้มากกว่า

Inseret Edit Delete ต้องทำใน command line เพราะต้องไปเขียนใน VS code ด้วย


INSERT มี 2 แบบ
INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)  
VALUES (value1, value2, value3,...valueN);

INSERT INTO TABLE_NAME VALUES (value1,value2,value3,...valueN);
* ตัวไหนเป็น AUTO INCREMENTAL ไม่ต้องใส่ค่าในคอลัมก็ได้
* ไม่มี ID อ้างอิงที่พิมพ์ไป (FK) == Error และเลข id จะถูกใช้ไปแล้ว
* colum ที่เรียงกับ value ต้องเรียงค่าเหมือนกัน


UPDATE ใช้สำหรับ แก้ไข Record(s) ในตาราง 

UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];

* WHERER กำหนดเงื่อนไข ว่าจะอัพเดตค่าไหนบ้าง (ไม่ใส่รันเลย ทำกับทั้งหมด)
* ใส่ id ผิด > 0 row effect == ไม่เกิดการอัพเดตขึ้น


DELETE ใช้สำหรับ ลบ Record(s) ใน ตาราง

DELETE FROM table_name
WHERE [condition];


1.1.  ประเภทของ SQL JOIN statement
JOIN == เอา table มาต่อกัน สร้าง table ใหม่ เอาอันเก่ามาต่อกัน โดยเป็นไปตามเงื่อนไขที่กำหนด
* ( ไม่ตรงข้อมูล ให้ค่าของอีกตารางเป็น === --- (null) )

LEFT JOIN − แสดงผลข้อมูลของ table ทางซ้ายทั้งหมด (table 1) และ ข้อมูลของ table ทางขวาที่ตรงเงื่อนไข (table 2) ( ไม่ตรงข้อมูล === --- (null) )
* เกือบจะเหมือน intersect

RIGHT JOIN − แสดงผลข้อมูลของ table ทางซ้ายที่ตรงเงื่อนไข (table 1) และ ข้อมูลของ table ทางขวาทั้งหมด (table 2)
* เกือบจะเหมือน intersect

FULL JOIN − แสดงข้อมูลทั้งหมดของทั้ง 2 table ทั้งที่มีข้อมูลเหมือนกัน และ ไม่เหมือนกัน
* union 
* MySQL ไม่ซัพพอร์ต

INNER JOIN − แสดงผลข้อมูลที่มีค่าทั้ง 2 table เหมือนกันใน column ที่ระบุ (Default) * ใช้บ่อย
* real intersect

SELF JOIN − ทำการเชื่อมความสัมพันธ์ของ table ตัวเอง โดยเปรียบเสมือนสร้าง table ตัวเองเป็นอีก table หนึ่งมา JOIN กันเอง
CARTESIAN JOIN หรือ CROSS JOIN − ทำการเอาข้อมูลทุก table มาเชื่อมกันทุกแถว ผลลัพธ์ที่ได้ของจำนวนบรรทัด จะเท่ากับผลคุณของ จำนวนบรรทัดทั้ง 2 table

-- SELECT * FROM sailors as s JOIN reserves as r ON s.sid = r.sid JOIN boats as b ON r.bid = b.bid WHERE b.color = BINARY 'Red' OR b.color = BINARY 'Green' OR b.color = BINARY 'Orange' OR b.color = BINARY 'Yellow'


SQL Operator
เหมือนเกือบหมด
<> 	  		เงื่อนไขข้อมูลด้านซ้าย และ ด้านขวา ไม่เท่ากัน 
AND 		เชื่อมเงื่อนไขตั้งแต่ 2 เงื่อนไขขึ้นไป ต้องเป็นจริงทั้งหมดถึงจะจริง
BETWEEN 	เปรียบเทียบข้อมูลว่าอยู่ระหว่างค่าต่ำสุด และ สูงสุด
EXISTS 	  	เปรียบเทียบข้อมูลว่ามีปรากฎอยู่ในแถวที่กำหนด
IN 	  	    เปรียบเทียบข้อมูลกับชุดข้อมูลโดยถ้ามีอย่างน้อยค่าที่เหมือนกัน จะมีค่าเป็นจริง
LIKE 	  	เปรียบเทียบข้อมูลว่าเป็นส่วนประกอบภายในข้อมูลอีกค่าหนึ่ง
NOT 	  	เงื่อนไขปฏิเสธ
OR 	  	  	เชื่อมเงื่อนไขตั้ง 2 เงื่อนไขขึ้นไป ถ้าเป็นจริงอันหนึ่งทั้งหมดจะเป็นจริง
IS NULL 	ตรวจสอบค่าว่าง

คำสั่งพื้นฐาน SQL
SELECT ใช้สำหรับ Query(ค้นหา)
AND Operator and OR Operator
ORDER BY เรียงตาม priority และกำหนด [ เงื่อนไข ] => ASC หรือ DESC
DISTINCT เอาเฉพาะค่าที่ไม่ซ้ำกันมา 

AS      ใช้เปลี่ยนชื่อ Column
LIKE    ใช้สำหรับค้นหาตารางที่ Match
    ‘_’     หมายถึงมีแค่ 1 arbitrary character
    ‘%’     หมายถึง 0 หรือมากกว่า 1 arbitary characters
        %b == หาที่ มี b ลงท้าย
        b% == หาที่ ขึ้นต้นด้วย b
        _b == อย่างน้อย 1 ตัวหน้า b
        __b == อย่างน้อย 2 ตัวหน้า b
        _% == มีอย่างน้อย 1 ตัว อะไรก็ได้ ; ตั้งแต่ 1 ตัวขึ้นไป
        ___% == มีอย่างน้อย 3 ตัว อะไรก็ได้ ; ตั้งแต่ 3 ตัวขึ้นไป
        %ar% == มี ar เป็นส่วนประกอบ
* '%_' หาจากข้างหลังมาหน้า


3.4  UNION, INTERSECT, EXCEPT
UNION: เอาทุกตัว
    ต้อง COLUMN เหมือนกัน ไม่งั้นเละ ; ไม่เท่ากัน ERROR
EXCEPT: เอาทุกตัวที่ไม่อยู่ในนี้
INTERSECT: เอาเฉพาะตัวที่เหมือนกัน


4.1.  Aggregate Operators
COUNT(A):			นับแถวที่มีค่าใน Column A
SUM(A):			ผลรวมของค่าทั้งของในแถวของ Column A
AVG(A):			หาค่าเฉลี่ยของ Column A
MAX(A):			หาค่ามากที่สุดของ Column A
MIN(A):				หาค่าน้อยที่สุดของ Column A


BETWEEN and AND operators
หาข้อมูล ระหว่างช่วงนั้นๆ 

เช่น หาชื่อของคนที่มีอายุตั้งแต่ 25 ถึง 35
SELECT sname FROM Sailors WHERE age BETWEEN 25 AND 35

*NOT BETWEEN X and AND Y หาข้อมูลที่ไม่ได้อยู่ในช่วงนั้น ; ตามข้างบนก็จะหา 25ลงไป 35ขึ้นไป แทน


SELECT Statements (Advanced)
GROUP BY clause	    :  แบ่งเป็น Group
HAVING clause		:  Filter แถว ใช้กับพวก COUNT พวก MAX
ORDER BY clause	    :  จัดเรียงลำดับ






LIMIT OFFSET == เอาแค่เท่านี้(LIMIT) เอาตัวถัดไปจากLIMIT(OFFSET) 
การใช้ OFFSET เช่น มีข้อมูล 1-20 LIMIT จะโชว์ 1-10 อยากได้โชว์ 11-20 OFFSET 10 ต่อด้วย
ต้องอยู่หลังสุด ; มี OFFSET ต้องมี LIMIT

การเรียงลำดับคำสั่ง
SELECT 
FROM 
WHERE
GROUP BY 
HAVING
ORDER BY  DESC 
LIMIT  OFFSET





สร้าง Project
สร้างโฟลเดอร์ > 
สร้าง app.js > 
npm init -y > 
ลง node_module ที่ใช้งาน (express, nodemon) > 
run nodemon _.js > 
เปิด app.js import express [ const express = require('express'); , const app = express(); ] > 
ใส่เลข port แล้วทำให้ server run [ const port = 8000; , app.listen(port, () => console.log('server running on port: ' + port)); ] > 
ทำให้ตัว express อ่าน JSON และ x-www-form ได้ [ app.use(express.json()); , app.use(express.urlencoded({ extended: false })); ] > 
สร้างตัวดัก path error ไว้ล่างสุดของหน้า แต่บน app.listen [ app.use('', (req, res, next) => { res.status(404).json({ message: 'Path not found on this server' }); } ) ] > 
สร้างตัวดัก error ไว้ล่างสุดของหน้า แต่บน app.listen ใต้ app.use'PATH ERROR' [ app.use((err, req, res, next) => { console.log(err); res.status(500).json({ message: err.message }); }); ] > 
สร้าง folder สำหรับ router == Routes และ สร้าง _Routes.js ขึ้นมา ทำการ import express และ router เข้ามา [ const express = require('express'); , const router = express.Router(); ] และสร้าง router . METHOD ( PATH , Fn ) สำหรับ get all / get one (by id) / create / edit / delete [ router.get('/', Fn); , router.get('/:id', Fn); , router.post('/', Fn); , router.put('/:id', Fn); , router.delete('/:id', Fn); ] และทำการ export ออกมา [ module.exports = router; ] >
สร้าง folder สำหรับ controller และสร้าง _Controller.js ในนั้น และสร้าง Fn middleware ของ router สำหรับ METHOD การ get all / get one (by id) / create / edit / delete เช่น ของ router.get เป็น [ getAllProducts =  ((req, res, next) => { Fn }) }); ] ใส่ให้ครับทุก METHOD ที่มีในหน้า Route และทำการ export ออกมา [ module.exports = { ชื่อFnทั้งหมด, ... } ] >
* exports.ชื่อFn = Fn เลยก็ได้ หรือจะมา module.exports = { ชื่อ,ชื่อ,... } ข้างล่างก็ได้
ใน Route.js ทำการ import ตัว Controller เข้ามา [ const _Controller = require( ' PATHที่มี_Controller.js นั้น ' ) ] แล้ว ใส่ Fn middleware ที่เรา import เข้ามาจาก Controller เข้าไปหลัง router.METHOD( ' PATH ' , '_ ใส่ตรงนี้ _' ) ในวงเล็บแต่ละตัว ตาม METHOD ที่สอดคล้องกับ Fn นั้นๆ >
app.js import ตัว router พร้อมประกาศตัวแปร เข้ามา และให้ทำงานเป็นตัว middleware [ const ชื่อ_Routes = require( ' PATHที่มี_Routes.jsนั้น ' ) ] >
ในไฟล์ Controller ลองใส่ Fn ง่ายๆ test ว่าเราจัดการ PATH และ METHOD และเขียนออกมาเบื้องต้นใช้งานได้แต่ละอันถูกต้องไหม เช่น Fn response message ออกมาเมื่อเราเรียกใช้ใน POSTMAN เช่น ((req, res, next) => { res.status(200).json({ message : 'TEST' }); }); >
จะให้ Controller รับ ข้อมูลจาก DATABASE โดยตรงไม่ผ่าน MODEL ; ลง MySQL2 == npm i mysql2 ( ต้องปิด server ( nodemon ก่อน ) ) และทำการ import mysql2 เข้ามาใน Controller [ const mysql = require('mysql2'); ] และสร้าง connection กับ database โดยคล้ายๆประกาศตัวแปร Fn โดย Param ข้างในเป็นรูปแบบ OBJ ( { urlไหน(ไม่ต้องใส่post) userอะไร passwordอะไร databaseชื่ออะไร } ) [ const connectoinPool = mysql.createPool({ host:'', user:'', password:'', database:'' }) ] >
* createConnection ( ทำงานแล้วปิดทันที ) / createPool (สร้าง conection ออกมาเยอะๆ (Pool) ไม่ได้ปิดทุกครั้งที่ทำงานเสร็จ )
( เริ่มทำใน createProduct Controller.js ก่อน ( METHOD POST ) )ทำการใช้คำสั่ง Run execute ให้ทำงานใน ตัว Fn ได้ [ connectoinPool.execute (' (คำสั่งของ SQL หรือ DATABASE ที่เราใช้ โดยระวังเรื่อง quote ที่เราใช้ด้วย ไปแก้ไข tables ไหน ใน database ) => 'INSERT INTO products (name, price) VALUES ( 'Pepsi', '15' )', (err, result, field) => {}); ] แล้วเขียน Fn เช็คว่าเราทำ SQL สำเร็จไหม ( error เป็นยังไง สำเร็จเป็นยังไง ) ด้วย log (err) (result) (field) ; โดยถ้าสังเกตุใน Fn เป็น Callback Fn ทำงานสำเร็จส่ง result, field ไม่สำเร็จส่ง err-or (err, result, field) => { if (err) return res.status(500).json({ message: err.message });  } โดยเมื่อเราสั่ง log result, field มาดู แล้วทำการ ใช้ POSTMAN เช็คว่าทำงานได้ไหม โดยถ้าทำงานสำเร็จ log ออกมา field จะ undefined ( มีเฉพาะใน พวก Select ข้อมูลเท่านั้น ) result ออกมาจะเป็น OBJ ของ class/libary ชื่อ ResultSetHeader สนใจแต่ใน {} พอ สนใจ affectedRows == ผลกระทบกับrow และ insertId == แสดงidที่ใส่เข้าไป(auto ให้ เรียงไม่มีทางซ้ำ) >
แล้วทำให้รับข้อมูลที่กรอกมาจริงๆจาก user โดยกำหนดตัวรับ body เข้ามา( destructuring ด้วยก็ได้ ) [const { name , price } = req.body; ] แล้วกำหนด validate ข้อมูลที่รับมาให้ถูกต้อง แล้วแก้ตรงคำสั่งของ execute ให้เป็นแบบ Preapre Statement โดยตรงค่า VALUES( ) ที่ต้องการรับจาก body ให้เป็น ? แล้วเพิ่ม parameter ต่อท้าย , [ ตรงนี้เป็นตัว body ที่รับมา มี ? กี่อันก็ต้อง , แล้วใส่ให้หมดทุกอัน ], =>  [ VALUES (?, ?)', [name, price], ] >
* `${}` ไม่ปลอดภัย จะโดน SQL injection ( เขียนคำสั่งใน body มา เช่น DROP TABLE แล้วมัน run คำสั่งนั้นใน Database เราเลย )
( ตัว getAllProducts Controller.js ) ทำการเขียนคำสั่งเชื่อม Database MySQL ใน [ connectionPool.execute('SELECT * FROM products', (err, result, field) => { console.log(result); console.log(field); res.status(200).json({ products: result }); }); ] โดยผลของการ log result,field ออกมาดู ; จะได้เป็น ARR-OBJ โดย result ออกมาเป็นแบบนี่้ [ BinaryRow { column_header : values_row_N } ] โดยมันทำการ convert แปลงแต่ละแถวเป็น OBJ โดย key เป็นชื่อ column (บนสุด) และ value เป็นค่าในแต่ละแถว โดยทั้งหมดอยู่ใน ARR อีกที ; และผลของ field เป็น ARR-OBJ โดยบอกข้อมูลของ column บนสุดแต่ละอันแบบละเอียด( ขนาด, การencode, ... มีบอกชื่อด้วย ) ( ไม่ค่อยได้ใช้ ) >
เนื่องจากตอนนี้เราทำการใช้งานแบบ Callback Fn อยู่ เราสามารถไปใช้แบบ Promise ได้ โดยประกาศให้ ตัวแปรทกำหนดให้ connectionPool เป็น promise [ const db = connectionPool.promise(); ] แล้วใน Fn Controller จะใช้งาน Promise ได้ ( then,catch หรือ async,await ) เราจะใช้ async , await แล้วทำการเขียน try {} catch(err) {} โดยใส่ async หน้า () Callback Fn ตอนแรก [ Fn = ( async (req, res, next) => ... ) ] ใน try ใส่ กำหนดตัวแปร รับ await database [ const [ result, field ] = await db.execute('SELECT * FROM products' ) ] ถ้า [ ไม่ destructuring ] ก็ได้แต่จะออกมาเป็น ARR-ARR-OBJ โดยเป็น ARR ที่แสดงทั้งข้อมูลทั้ง result กับ field ออกมาหมด เราต้องทำการ destructuring ARR โดยใส่ [ result, field ] เพื่อเลือกได้ว่าจะเอา result หรือ field ( ก่อน destructuring index 0 == reslut , index 2 == field * ต้อง Arr[0] เพื่อเลือกแค่ result ออกมา ถ้าไม่ destructuring ) >
แปลง Callback Fn ใน getProduct เป็น แบบ Promise async,await ; รับค่า paramas มา destructuring [ const { id } = req.params; ] แล้วให้ทำการเลือกค่าใน Database ตาม id ที่กรอกมา ('SELECT * FROM products WHERE id = ?',[ id ]); และให้ทำการ validate ตรง ressponse ว่า id ที่ต้องการหามี length ไหม ถ้ามี ให้แสดงค่าออกมา ( ตอนเจาะข้อมูลต้อง [][] 2 ครั้งไม่งั้น เพื่อให้ออกเป็น OBJ เพราะใส่ [] ครั้งเดียว มันออกมาเป็น ARR-OBJ ทำให้ frontend ทำงานยาก ) ถ้าไม่เจอ length = 0 == false ให้แสดงคำว่าไม่เจอ >
แปลง Callback Fn ใน createProduct เป็น แบบ Promise async,await ; โดยรับค่าที่กรอกมาจาก body มา destructuring [ const { name, price } = req.body; ] และทำการ valiadate body ที่กรอกมา 
แปลง Callback Fn ใน deleteProduct เป็น แบบ Promise async,await ต้องมีการ validate ว่า Id ถูกต้องไหมก่อน แล้วค่อยไปทำการลบตาม Id ที่ระบุ ซึ่ง METHOD delete การลบมี status 204 และไม่จำเป็นต้องมี message ออกมา
updateProduct รับตัว body และ param เข้ามา และทำการ validate ตัว body ที่กรอกเข้ามาก่อน และทำการ validate Id ว่าเป็น Id ที่มีอยู่ไหม แล้วค่อยทำการ เปลี่ยนข้อมูลใน database >
ทำการ refactor ; สร้างโฟลเดอร์ util และสร้างไฟล์ db.js แล้วตัด [ const mysql...const db ] จาก _Controller.js มาไว้ใน db.js แล้วทำการ export ออกมาจาก db.js โดยเปลี่ยน const db เป็น export ออกมาเลย [ module.exports = connectionPool.promise(); ] แล้วทำการ import db เข้ามาใน _Controller.js [ const db = require('../util/db'); ] >
* Model == ส่วนที่เชื่อมต่อกับ Database
สร้าง โฟลเดอร์ Model แล้วสร้าง .js เหมือนชื่อตารางแต่ตัวแรกเป็น UpperCase ; Import util db.js เข้ามา โดยย้าย [ const db = require('../utils/db'); ] จาก _Controller.js มาไฟล์นี้ ; สร้าง class constructor ขึ้นมา เพื่อทำการสร้าง OBJ จากตารางในแต่ละ row ออกมา ; เราจะสร้าง class constructor สำหรับการ createProduct [ class Product { constructor(name, price) { this.name = name; this.price = price; } }  ] โดย สร้าง static method create() ต่อจาก constructor ใน Product class ; ทำการ export ออกมา [ module.exports = Product; ] แล้ว import เข้าไปใน Controller [ const Product = require('../models/Products') ] >
* instance เรียกมาจาก OBJ ที่สร้างมาจาก class OBJ อีกที ==>> 
* static มี static หน้า Fn() ใน class OBJ เรียกผ่านจาก class OBJ ได้โดยตรง === static Method ==>> 
* class.static-method()
* มองว่าแต่ละ row == OBJ ที่สร้างมาจาก class ของ Model => ทำการ mapping class

* class OBJ return ตัวเองได้ แต่ OBJ return ตัวเองไม่ได้ (.this?)

ใน Controller ตรง Fn createProduct เราจะสร้าง ตัวสร้างข้อมูลใหม่ขึ้นมา จากการใช้ class constructor ด้วยคำสั่ง [ const result = await Product.create({ name, price }); ]

สร้าง static findAll ใน class Product ต่อ  แต่เนื่องจากมัน return เป็น [result, fields] ต้องใช้ .then แล้วทำการ destructuring เอาแค่ result ไม่เอา fields [ .then(res => res[0]); ]
สร้าง static findById ใน class Product ต่อ 
กลับไปแก้ตัว createProduct ใช้ตัว Fn findById เพื่อจะได้แสดงตัวที่ Create เข้าไปด้วยได้ หรือ ใช้เป็น ข้อมูลจาก result จากการ execute แทน โดยเช็ค affectedRows ว่ามีไหม แล้วแสดงค่ากลับไป

สอน ลอง สร้าง in-stance method [ save() { return db.execute('INSERT INTO products (name, price) VALUE (?, ?)', [this.name, this.price]) .then( ([res]) => { if (res.affectedRows) return { id: res.insertId, name: this.name, price:this.price }; throw new Error('cannot creat porduct: affected rows == 0') }); } ] และตรง Fn createProduct ใน Controller เปลี่ยนส่วนล่างเป็นแบบใช้ new Product => .save [ const product = new Product(name, price);  const newProduct = await product.save();  res.status(200).json({ products: newProduct }); ] ; ( ตรงก่อนthen == add เข้าไปแล้ว หลังจาก then มันแค่เอามาแสดงเฉยๆว่าทำการ Create อะไรเข้าไป ) ; โดยสามารถทำให้สั้นลงโดยการใช้ this ในการ add ID ที่เอามาจาก result.insertId เข้าไปใน OBJ class ที่เราสร้างมา หน้า Model [ if (res.affectedRows) { this.id = res.insertId;  return this; } ] หน้า Controlleer [ const product = new Product(name, price);  await product.save();  res.status(200).json({ products: product }); ] >
ทำ static method deleteById ใน Model [ static deleteById(id) { return db.execute('DELETE FROM products WHERE id = ?', [id]).then ( ([res]) => { if (res.affectedRows) return res.affectedRows; throw new Error ('product ID is not found'); }); } ] และใน Controller Fn deleteProduct แก้เป็น [ await Product.deleteById(id);  res.status(204).json(); ] >
ทำ static method UpdateById ใน Model [ static updateById(id, product) { return db.execute('UPDATE prodcuts SET name = ?, price = ? WHERE id = ?', [ product.name, product.price, id ]).then ( ([result]) => { if (result.affectedRows) return { id, ...product }; throw new Error('product id is not found'); }); } ] และใน Controller Fn deleteProduct แก้เป็น [ const product = await Product.updateById( id, { name, price } );  res.staus(200).json( { product } ); ] >
ทำ MultipleAdd ( ให้ชื่อว่า bulkCreate ) ; สร้าง PATH,FN Controller ใหม่ใน Route [  ] ; Controller เขียน Fn bulkCreate และเขียนลงไปใน module.exports ข้างล่างด้วย ; ใส่ try {} catch {} ตรง catch จับ err-or เขียนเหมือนเดิม เนื่องจากรับข้อมูลเป็น ARR => Validate เอามาจาก createProduct แต่เนื่องจากเรา Add หลายค่า เลยต้องใช้ for loop(of) [ for ( { name, price } of products ) { ... } ] ในการเช็คค่าก่อนจะ Insert เข้าไปใน Database ; ไปเขียน Model ก่อน กำหนดตัวแปรเป็น คำสั่ง sql [ static bulkCreate(products) { let sql = 'INSERT INTO products (name, price) VALUES' } ]  และกำหนด ARR เปล่าขึ้นมา คอย push ค่าลงไปใน paramater ที่แทนค่า ? ใน VALUE ,[] ; แล้วทำ for loop(of) เพื่อบวกตัว Add Value ตามที่มีการกรอกมาใน Body ของ Method POST ;  [ const values = [];  for ( { name, price } of products ) { sql = sql + ' (?, ?),';  value.push(name, price); } ] ; และทำการสั่ง execute sql โดยเราค่าจากข้างบนมารวมกัน แต่เราต้องตัด , ที่เกินมาจาก ' (?, ?),' ด้วย [ db.execute(sql.slice(0, -1), values).then ( ([result]) => { if (result.affectedRows) return result;  throw new Error('cannot create product: affected rows == 0') }) ] แล้วเอา Fn กลับไปที่ Controller [ await Product.bulkCreate(products);  res.status(201).json({ message: 'all product created', added_products: products}) ] >


destructuring
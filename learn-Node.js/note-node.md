<u>ข้อดี</u>
single thread => ใช้ memory น้อย รองรับผู้ใช้งานจำนวนมาก
ทำงานแบบ Asynchronous
เหมาะกับงานพวก chat / realtime application

<u>ข้อเสีย</u>
ไม่เหมาะกับงานที่ใช้ cpu เยอะๆ render ML algorithm ขุดCrypto

=======================================

<strong> import/export </strong>
ใช้รูปแบบ common js (ยังไม่รองรับ ES6)

<u>ทำได้ 2 วิธี</u>
1. export ออกมาเป็นตัว OBJ โดยตรง
module.exports = OBJ (ได้ทั้ง = OBJ ที่มีอยู่แล้ว หรือ ; จะมาสร้าง {OBJ} ตอน exports เลยก็ได้)
export เป็นทั้งก้อน OBJ นั้นๆ ; export ARR ก็ได้ ; export String ก็ได้ ; export ฟังก์ชันใน OBJ ต้องเปลี่ยน = ตัวแรกเป็น :
* เขียนอธิบายแบบ OBJ เป็นหลักก่อน แต่จริงๆ exports อะไรได้หมด

/////////////////////////////////////

=export=
const user = {
    username:'john',
    age:20
    getFullname: () => 'Jim Smith'
}

module.exports = user;

=import=
const user = require('./user');

/////////////////////////////////////

2. export เป็น property ของ OBJ
exports.'KEY'='VALUE';
exports ออกมา จะสร้าง OBJ จะเป็น OBJ เดียวกัน ; ประมาณ export.'KEY' = 'VALUE'

/////////////////////////////////////

=export=

exports.username = 'jim'; 
// เหมือน export แบบนี้ == {username: 'Jim'}
exports.password = 12345678; 
// export อันนี้ไปต่อกับ OBJ เดิม == {username: 'Jim', password: '12345678'}
exports.getFullname = () => 'Jim Smith';
// == {username: 'Jim', password: '12345678' , getFullname = () => 'Jim Smith';}


=import=
const user = require('./user');

/////////////////////////////////////

* ถ้าสั่ง export ทั้ง 2 แบบ พร้อมกัน => จะทำตัว วิธี 1 อย่างเดียว เสมอ (export ออกมาเป็นตัว OBJ โดยตรง ; module.exports = '' )
* KEY VALUE มีค่าเหมือนกัน => ลดรูปเขียนแบบ shorthand ได้ เช่น getAge = () => 20 >>> module.exports = { getAge, }

=======================================





<strong> Express </strong>
สร้างโฟลเดอร์ > npm init -y > npm i express
สร้างไฟล์ .js > import module express แล้ว กำหนด app OBJ ของApp Express

const express = require('express')
const app = express();

ใช้คำสั่ง Fn listen รอรับ request จาก server ; กำหนด port เป็นตัวแปรแยก ป้องกันเมื่อ port ชนกับในระบบ

const port = 8000;
app.listen(port, ()=> console.log(`Server Express on port ${port}`))

สร้าง Fn use เพื่อให้ app ส่งค่ากลับออกไป response เมื่อ HTTP Status Code == 200 (เขียนก่อน Fn listen)

app.use((req, res) => {
    res.status(200).send('<h1>HELLO</h1>')
})

<u>Basic Routing</u>
routing คือ วิธีที่บอกให้ server จัดการกับ request จาก client ในแต่ละ endpoint
endpoint ประกอบด้วย URL (path) และ http request method (GET, POST etc.) 
สร้าง routing โดยใช้คำสั่ง app.METHOD(PATH, HANDLER)
    app คือ express object ที่สร้างจาก express()
    METHOD คือ http request method (GET, POST, PUT, PATCH, DELETE)
    PATH คือ path ที่ส่งมาจาก http request
    HANDLER คือ callback function ที่ใช้จัดการกับ request และ response
ถ้า http request มี method และ path ตรงกับที่เราสร้าง route ไว้ จะทำงานใน handler function หากไม่ตรงกันจะไม่ทำงาน

* browser == method .get เสมอ

app.METHOD('PATH', Fn handle(req, res) => {
    res.status(' HTTP Status Code ').send(' ')
})

* req คือ request object ซึ่งประกอบไปด้วยข้อมูลต่างๆ ที่ส่งมาจาก http request
* res คือ response object ซึ่งประกอบไปด้วยข้อมูลต่างๆที่เราต้องการส่งไปใน http response

///////////////////////////////////////////
app.post เรียกใน POSTMAN APP / ใส่ฟังชันก์ submit ให้กับ html button

app.get('/',(req, res) => {
    res.status(200).send('<h1>Country Load TAKE ME HOME <br>HELLO My First Express PRO - GET</h1>')
})

app.post('/',(req, res) => {
    res.status(200).send('<h1>Country Load TAKE ME HOME <br>HELLO My First Express PRO - POST</h1>')
})

///////////////////////////////////////////

<u>Response Object</u>
OBJ ที่เก็บ HTTP response และส่งกลับไปที่ client เมื่อมีการ http request เข้ามา
method ที่สำคัญ
    res.status(code) ใช้ set ค่า response code (200, 400 etc.)
    res.send(body) ใช้เพื่อส่ง response กลับไป bodyอาจเป็น text, array etc.
    res.json(body) ใช้เพื่อส่ง response กลับไป โดยส่ง response ออกไปในรูปแบบ JSON ( {} , [] , [{}] )
    res.redirect(path) ใช้เพื่อสั่งให้ response redirect ไปที่ path ที่ต้องการ  

<u>Request Object</u>
    









<strong>10-03-2564</strong>
<u>ทบทวน</u>

ถ้า method ตรง path ตรง => code ข้างในจะทำงาน
express => ทำหน้าที่สร้าง response OBJ และ request OBJ
res. => ทำหน้าที่จบการทำงานของ response และส่งกลับค่าไปหา client ตามที่เราเขียน code ไว้
res.status default = 200

<u>Middleware</u>
แปลว่า ตรงกลาง > อยู่ตรงกลางระหว่าง request กับ response
* เมื่อมี request ต้องส่ง response กลับไป แต่ตอนนี้จะมี Middleware มาขั้น ; Middleware โดยจะสามารถแก้ไข การรับ-ส่ง และ ; สั่งจบการทำงานของวงรอบการรับ-ส่งได้เลย
Middleware มีได้มากกว่า 1 ตัว ; ทำงานเป็นลำดับขั้นไปเรื่อยๆได้ ; ใช้ parameter 'next' ในการสั่งให้ไปทำงานที่ Middleware ตัวถัดไป ;
* จากตัว Fn app.METHOD('PATH', (req, res, next) => { } )
* ถ้ามี else ต้องมี if ; แต่มี if ไม่จำเป็นต้องมี else


///////////////////////////////////////////////////////////////

app.use((req, res, next) => {
  req.user = { id: 1, username: 'John', role: 'admin’ }; 
  // * สร้าง Property เข้าไปใน OBJ request เพื่อให้ middleware ข้างล่างใช้งานได้ ( ปกติต้องทำการ Query จาก Database เพื่อเอาข้อมูล ; เพื่อไม่ต้อง Query ข้อมูลจาก Database ทุกครั้งที่เรียกใช้ข้อมูล )
  next();
});
app.use((req, res, next) => {
  if (req.user.role !== 'admin') return res.status(401).json({ message: 'Un' });
  next();
});

///////////////////////////////////////////////////////////////


* Middleware มี METHOD .use ให้ จะใช้งาน Middleware โดยไม่สน PATH
* .listen มี parameter 2 ตัว เลข port, callbackFn

// * กำหนดตัวแปร แทน Fn Middleware ได้ ; อ่านยาก แต่ลดความซับซ้อน หาcodeได่ง่าย แก้บัคง่าย


///////////////////////////////////////////////////////////////

app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

--------------แปลงเป็นแบบกำหนดตัวแปร Middle ware--------------------

const firstMiddleware = (req, res, next) => {
    console.log('First Middleware');
    next();
};

app.use(firstMiddleware);

///////////////////////////////////////////////////////////////


* Fn Callback ของ .Method ถ้าเขียนแบบ Fn Declaration => app.METHOD('PATH', function(req , res, next) {});

<u>Router-level middleware</u>

วิธีใช้ประกาศ const router = express.Router(); ก่อน
ใช้เวลามี PAHT ซ้ำๆ เช่น user/login , user/register , user/profile , user/post ; ลดความซ้ำซ้อน ง่ายในการแก้ไข หาbugง่าย maintainง่าย


///////////////////////////////////////////////////////////////

app.post('/user/login', (req, res, next) => {
    res.status(200).send('POST LOGIN');
});
app.post('/user/register', (req, res, next) => {});
app.get('/user/profile', (req, res, next) => {});
app.get('/user/post', (req, res, next) => {});
app.post('/user/profile', (req, res, next) => {});
app.delete('/user/post', (req, res, next) => {});


-------แปลงจากเขียน PATH แบบ conflig เป็น PATH ที่สั้นลง ด้วย router-------
* PATH conflig คือการที่ PATH มีการซ้ำๆกันแบบด้านบน


const router = express.Router();

router.post('/login', (req, res, next) => {
    res.status(200).send('POST LOGIN');
});
router.post('/register', (req, res, next) => {});
router.get('/profile', (req, res, next) => {});
router.get('/post', (req, res, next) => {});
router.post('/profile', (req, res, next) => {});
router.delete('/post', (req, res, next) => {});

app.use('/user', router)

// วิ่งมาทำตรง .use(PATH, router) ก่อน ; เจอ PATH /user จะไปทำงานตัว Ronter Middleware ; แล้ว วิ่งไปต่อ PATH ต่างๆใน router.METHOD ; เสมือนเอาตัว PATH ของ .use(,router) ไปต่อกับ PATH ที่ ronter.METHOD


///////////////////////////////////////////////////////////////





<u>Error-handling middleware</u>


///////////////////////////////////////////////////////////////


app.use((req, res, next) => {}); 
// Middleware ปกติ แบบไม่มี Error-handling


app.use((err, req, res, next) => {
    res.status(500).send('Error')
});
// Middleware แบบมี Error-handling


///////////////////////////////////////////////////////////////


เป็น Middleware ที่ต้องมี 4 parameter โดย error อยู่ parameter ตัวแรก
เมื่อมี error เกิดขึ้น Error-handling middleware จะถูกเรียกใช้งานทันทีโดยไม่สนลำดับขั้นของ middleware อีกต่อไป 
*err คือ javascript error object ที่ถูกสร้างขึ้นเมื่อเกิด error

* throw new Error() == สั่งให้สร้าง Error ขึ้นมา ; ดักการเกิด Error จาก Asynchronous
*next() จะวิ่งไปหา Middleware ตัวถัดไป ; แต่ถ้าถ้ามี parameter ข้างใน แบบ next(error) จะวิ่งไปหา Middleware Error-handling

* Error แบบ Asynchronous ต้องใส่ Try Catch ครอบเสมอ เพราะตัว JS ดักเองไม่ได้




<u>Query string</u>
อยู่หลัง เครื่องหมาย ? ใน URL Path ; ประกอบด้วย KEY=VALUE เป็นคู่ๆ ; ถ้ามีหลายคู่ ขั้นด้วย &






<strong>10-03-2564</strong>
<u>ทบทวน</u>

<u>Query string</u>
ส่วนที่อยู่หลัง ? ; ข้อมูลไปอยู่ใน Request OBJ เรียกด้วย req.query เป็น OBJ

<u>Parameter</u>
อยู่หลังโคลอน (:) ใน path ; Keys คือที่เขียนใน PATH ค่าอยู่ใน URL ; ข้อมูลไปอยู่ใน Request OBJ เรียกด้วย req.param เป็น OBJ


Query ไม่ต้องกำนหดใน PATH ; Param ต้องกำหนดใน PATH โดยมี : นำหน้า

GET DELETE ไม่มีตัว Body ; ส่งได้แบบ Query / Param เท่านั้น

axios.post('/login', { username: 'John', password: 'codecamp' });
parameterตัวที่สอง {} คือ Body

Req ที่ส่งไปมี content type อยู่ เช่น form enctype=multipart/form-data สำหรับFormที่จะมีการ upload file

การส่ง BODY 3 แบบ
1.ส่งผ่าน Form x-www-form-urlencoded (เว็บที่ไม่ใช่พวก React / Angular จะส่งแบบนี้)
2.ส่งผ่าน multipart/form-data ข้อมูลเป็นbinary(มีอัพไฟล์)
3.ส่งแบบ Raw JSON ; application/json ; สามารถส่งข้อมูลที่ซับซ้อน เป็นหลายๆชั้นได้ วิธีการส่งไม่ยุ่งยาก

เมื่อส่งข้อมูลจาก Req Body มายัง Server ตัว expreess จะอ่านไม่ได้ ; ต้องทำการแปลง โดยการใช้ผ่าน Middleware ก่อน (app.use) ; แปลงข้อมูลใน Req OBJ ที่ Req ได้รับมาจาก Body (ส่งมาให้) แล้วไปเก็บไว้ใน Request Object Body ( req.body )

Middleware ทำการ แปลง String เป็น OBJ ให้ ; request.body แต่ละแบบใช้ ฟังก์ชัน express._() หรือ module คนละแบบกัน

Server เมื่อมี Request เข้ามา จะทำการแกะ Request OBJ ตัวนี้ > แล้วทำการ Matching ; Server แกะมาเป็น String > express จะทำการอ่านค่านั้นไม่ได้ ต้องการทำแปลงให้ express ก่อน แล้วแต่รูปแบบของการส่ง

เลือกใช้ Middleware ในการแปลงข้อมูลจาก Sever
1.middleware กรณี raw json ใช้ express.json()
2.middleware กรณี application/x-www-form-urlencoded ใช้ express.urlencoded(option)
3.middleware กรณี multipart/form-data ใช้ third-party module เช่น multer, formidable

<u>2.middleware กรณี ข้อมูลแบบ application/x-www-form-urlencoded</u>

ใช้คำสั่ง
app.use(express.urlencoded({ extended: false }))
* { extended: false } เป็น Libary มีค่าเป็น Boolean จะใช้ binary คนละตัวในการแปลงข้อมูล ; false=querystring , true=qs
ได้ออกมาเป็น OBJ

<u>3.middleware กรณี ข้อมูลแบบ multipart/form-data (กรณีที่ input ส่งมีการส่งไฟล์ (เช่นอัพโหลดรูป)</u>

ต้องใช้ module อื่นๆในการจัดการ ; multer npm ; ต้องทำการลงก่อน ; เป็น module ทำหน้าที่เหมือน middleware ที่จัดการ multipart/form-data ได้



<u>การเข้าถึง Static file</u>
พวกไฟล์ประเภท .css และ .js หรือ รูปภาพ

ต้องทำการ built-in middleware ของ express ; express.static('_folderName_') ; ตัว express.static จะมองไฟล์และโฟลเดอร์ใน _folderName_ นั้นทั้งหมดเป็น static แล้ว ; เช่น public/image เมื่อใช้ express.static('public') ทำให้ตัว public เป็น static ขึ้นมา เวลาเรียกใช้ PATH ในเว็บไม่ต้องใส่ ในPATH Urlแล้ว ในการเข้าถึง

* มองว่าโฟลเดอร์ public ทำหน้าที่เก็บไฟล์ static ไว้ข้างในทั้งหมด มันเลยมองข้าม โฟลเดอร์ public ไป 

สามารถใส่ PATH ใน middleware .static ได้
app.use('PATH', express.static('_folderName_'))
เช่นถ้าใส่ PATH = 'static' ; พอเรียกใช้งานต้อง /static/image/ ถึงจะเข้าถึงรูปภาพนั้นได้


MVC
ช่วยในการพัฒนา
แบ่งเว็บไซต์ออกเป็น 3 ส่วน Model View Controler
View == สิ่งที่มองเห็น > หน้าตาเว็บ ส่วน HTML
Controler == จัดการ Logic ทั้งหมดของโปรแกรม 
Model == ข้อมูล ทำหน้าที่เชื่อม Database กับ Modeol 


* promisify ทำให้ callback Fn กลายเป็น Promise => ทำให้ Callback ใช้ Async Await 
* Async => ทำให้ return ค่าออกมาเป็น Promise
// const a = 1;
// const b = 2;

// getAllSale(a , b)
// function getAllSale(a = null, b = 0){

//     return 'Function Declaration'
// }


// const getAllSale = function() {
//     return 'Function Expression'
// }
// getAllSale()


// const getAllSale = () => 'Arrow Function'; // {return 'Arrow Function'}

// const getAllSale = () => {}

// const getAllSale = () => { return {name: 'Arrow Function'} }
    
// const getAllSale = a => ({name: 'Arrow Function'}); // {return {name: 'Arrow Function'}}
// console.log('Get Sale Arrow Function')

// getAllSale(a , b)

//Spread และ Rest Operator 

//REST OPERATOR (ที่เหลือ)

// const sum = (a,b, ...input) => input.reduce((sum, el) => sum + el , 0);
//     // input [1, 4, 6, 7, 8]
    
// console.log(sum(1, 4, 89, 45, 67))

//ต้องอยู่หลังสุดเสมอ
//ไม่เหลือค่าอะไรให้ = []


// //SPREAD OPERATOR (กระจายออก)

// const sum = (...input) => input.reduce((sum, el) => sum + el, 0);

// const num = [1, 3, 5, 7, 12, 13]
// console.log(sum(num)) // 01, 3, 5, 7, 12, 13
// console.log(sum(1, 3, 5, 7, 12, 13)) // 41

// const a = [1, 4, 5]
// const a = [2, 7, 8, 9]

// let c = [a,b] // [[1, 4, 5],  [2, 7, 8, 9]]
// c = [...a,b] // [1, 4, 5, [2, 7, 8, 9]]
// c = [...a,...b] // [1, 4, 5, 2, 7, 8, 9]

// //อยู่ตรงไหนก็ได้ ใน parameter = มีหลายๆตัวได้
// //ใส่คู่กับ value ธรรมดาได้

// cloneA = a; // แก้ค่า cloneA ส่งผลต่อ A ด้วย
// cloneA = [...a]; // แก้ค่า cloneA ไม่ส่งผลต่อ A

// const obj = {
//     fname: 'w',
//     lname: 't'
// }

// //clone OBJ ด้วย SPREAD OPERATOR
// cloneObj = Object.assign({}, obj)
// cloneObj1 = {...obj}

// //กำหนด permission ให้ Role ต่างๆ

// // role // account, sale, hr, store
// function checkRole (...role) { //role รับเป็น ARR ของ String
//     role.includes['account'] => getAllAccount // ใช้ includes ตั้งเงื่อนไข เพื่อเข้าถึง function ต่อไปได้

// }

// function getAllAccount() {
//     if (!checkRole('account') return; //ส่งเป็น ARRAY เข้าไป ex. ARR 'account'
//     return [
//         {
//             name:'nameNO01',
//             num:'numNO01',
//             balance:90
//         },
//         {
//             name:'nameNO02',
//             num:'numNO02',
//             balance:50
//         }
//     ]
// }


// //Destructuring

// //ARRAY Destructuring
// //เอาข้อมูลบางส่วนใน array / object ออกมาใช้ได้

// const fullName = ['w','k','t','197/23']
// // const firstName = fullName[0]
// // const lastName = fullName[1]
// // const nickName = fullName[2]
// // // const address = fullName[3]

// // console.log(fullName[0] + ' ' + fullName[1] + ' ' + fullName[2] + ' ' + fullName[3])
// // console.log(firstName + ' ' + lastName + ' ' + nickName + ' ' + address)

// const fullName1 = ['w','k','t','197/23']

// //สามารถเพิกเฉย elements ได้โดยการใช้ comma
// // const [firstName1, lastName1, nickName1, address1] = fullName1
// // const [,,, address1] = fullName1
// const [firstName1, , nickName1, ] = fullName1
// console.log(nickName1) // [ 'w', 'k', 't', '197/23' ] 


// //ใช้กับ userState ได้
// const [firstName, lastName] = ['Wissanu', 'KongjunD'];
// useState(''); // [state , setState]
// const [state, setState] = useState(''); // [state , setState]



//วนลูปกับ .entries ได้
// const person = {
//     firstName : 'Wis',
//     lastName : 'Kong',
//     age : 27
// }

// Object.entries(person); // [[firstName : Wis], [lastName : Kong], [age : 27]]
// for (let entry of Object.entries(person)) {
//     console.log(`${entry[0]} : ${entry[1]}`)
// }

// for (let [key, value] of Object.entries(person)) {
//     console.log(`${key} : ${value}`)
// }


// //ใช้ในการสลับค่าข้อมูล
// let guest = 'jane';
// let admin = 'pete';

// // let dummy = guest;
// // guest = admin;
// // admin = dummy;
// // console.log(guest) // pete
// // console.log(admin) // jane

// [guest, admin] = [admin, guest]
// console.log(guest) // pete
// console.log(admin) // jane


// //The rest '...' ARRAY
// // const fullName = ['w','k','t','197/23']
// // const [firstName, lastName, ...otherInfo] = fullName; // [ 'w', 'k', 't', '197/23' ] 
// // console.log(fullName)

// //ต้องการทุกค่าในนั้น เขียนแค่ตัวแรกๆ แล้วต่อด้วย ,...rest (ใช้ชื่ออืนที่ไม่ใช่ rest ก็ได้) 
// //ต้องอยู่หลังสุดเสมอ

// const fullName = ['w']
// const [firstName, lastName, ...otherInfo] = fullName; // [ 'w', 'k', 't', '197/23' ] 
// console.log(lastName) // undefined
// console.log(otherInfo) // []

// //ไม่เจอค่าที่เขียนไว้ก่อน ...The rest = undefined
// //ค่าไม่ถึง otherInfo = []

//สามารถใส่ default value ให้กับค่าที่ไม่เจอในตัวแรกได้ 
// const fullName = ['w']
// const [firstName, lastName = 1, ...otherInfo] = fullName; // [ 'w', 'k', 't', '197/23' ] 
// console.log(lastName) // 1
// console.log(otherInfo) // []

// let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius','']

//OBJECT Destructuring

//Object เทียบที่ key ถ้า key ชื่อตรงกัน จะเอาค่า value ของตัวนั้นมาเก็ยในตัวแปรที่ชื่อตรงกับ key

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };


// const title = options.title
// const width = options.width
// const height = options.height


// // let {title, width, height} = options;

// // console.log(options);  // {title: "Menu", width: 100, height: 200}

// // console.log(title);  // Menu
// // console.log(width);  // 100
// // console.log(height); // 200


// const auth = {
//     token: 'XXX',
//     user: {
//         username: 'Mike',
//         email: 'mike@mail',
//         addr: {
//             postCode: '10000',
//             Moo: '1'
//         }
//     },
//     cart: [
//         {
//             product: 'I4',
//             amount: 1,
//             price: 1999,
//             vendor: {
//                 name:'apple',
//                 country:'USA'

//             }
//         },
//         {
//             product: 'Chargers',
//             amount: 1,
//             price: 49
//         },
//     ],
//     totalP: 2048
// }

// // const token = auth.token  
// // const user = auth.user
// // const cart = auth.cart
// // const totalP = auth.totalP

// // comment const ข้างบนไม่งั้นrunไม่ได้
// // const { token, user, cart, totalP} = auth;  // สลับ parameter ใน {} ได้ ประกาศก่อนหลังอะไรก็ได้ ไม่มีลำดับ => แค่ไปเทียบค่า key แล้ว return ค่า keysValue ของมัน ไม่เเจอ = undefined
// // console.log(token)
// // console.log(user)
// // console.log(cart)
// // console.log(totalP)

// // // comment ข้างบนไม่งั้นrunไม่ได้
// // const { user } = auth;  // สามารถเอาแค่ค่าใดค่านึงก็ได้
// // console.log(user)

// const { f:firstName = 'Wissanu', l:lastName, nickName = 'Tle'} = { f: 'Wi' , l:'Ko'} 
// // เปลี่ยนชื่อตัวแปรได้ เมื่อไม่อยากได้ชื่อตัวแปรเดิม กำหนดด้วย ตัวแปรเดิม : ตัวแปรชื่อใหม่
// // กำหนด default name ของkeyได้ โดย Key = default value
// // ถ้า key ไม่ตรง/ไม่เจอ = undefined
// console.log(firstName)
// console.log(lastName)
// console.log(nickName)

// // สลับข้อมูลได้ ไม่จำเป็นต้องเรียง
// // ใช้ prompt ข้อมูลที่ไม่มีใน Object ก่อนหน้าได้ ถ้าใส่ในที่มีอยู่แล้วจะไม่ prompt


// // The rest ... Object
// // comment ข้างบนไม่งั้นrunไม่ได้
// // const {user, ...other} = auth;
// // // ({user, ...other} = auth);
// // console.log(auth)

// // ต้อง const let ไว้ตลอด เมื่อประกาศ Destructuring
// // หรือให้ตัวแรกครอบ { ตัวDestructing } และ ( ครอบทั้งบรรทัด )

// //Nested Destructuring
// //ใช้ช่วย ในการ สำหรับ OBJ หรือ ARR มี OBJ หรือ ARR ซ้อนเข้าไปเรื่อยๆ

// // const { user: { username , password, email, addr: { postCode } }, token } = auth;
// const { cart: [
//     {
//         product, 
//         vendor: {
//             country
//         }
//     }, 
//     product2
//     ], 
//     token
// } = auth;
// console.log(auth) // มีคืนค่า / ไม่เจอ = undefined
// // console.log(vendor) 
// console.log(country) 

// // ค่า Key destructuring เข้าไปข้างใน = ตัวแปรเก่าหายไปแล้ว
// // ต้องมั่นใจว่า Key ในสิ่งที่ Destructuring อยู่


// const props = {
//     title: 'MT',
//     header: 'WC',
//     nav: ['h', 'au', 'ct', 'li']
// }

// const getAllInfo = ({ title, header }) => {
//     console.log(title);
//     console.log(header);
// }

// getAllInfo(props);











// // Getter และ Setter
// // คล้ายๆเป็นฟังชันก์ ในการกำหนดค่า และเรียกค่า โดยไม่ได้ทำโดยตรง
// // เป็น Property ชนิดนึง เข้าถึงโดยอ้อม

// // get ตัวเรียกค่าข้อมูลออกมา / อ่านค่า 
// // set ตัวกำหนดค่าข้อมูล / กำหนดค่า

// //ex get

// let user = {
//     name: "John",
//     surname: "Smith",
//     // fullName: 'Alice Cooper' //เพิ่มจาก Function ด้านล่าง

//     // fullname: ${this.name} ${this.surname}
//     get fullName() {
//       return `${this.name} ${this.surname}`; //หา Object before the dot
//     },
    
//     set fullName(str) {
//         if (str.length > 10 ) {
        
//         [this.name, this.surname] = str.split(' ');
//         } 
//     }
// };

// //เป็นการเขียน property มาอีกตัว เป็น getter setter
// //setter ต้องมี getter ไม่งั้นจะไม่มีค่าออกมา หรือ udnefined

// console.log(user.fullName); // John Smith

// user.fullName = 'A C'; //เหมือนเป็นการเพิ่ม {fullName: 'Alice Cooper'} => แก้เป็น A C เพื่อให้เงื่อนไข setter false = ไม่ add
// //code บนนี้ วิ่งไปหา setter แล้ว ทำตามเงื่อนไข 
// //ใช้ set ในการเขียนฟังชันก์ ให้เมื่อเวลาเพิ่มเข้าไปต้อง split เป็น name & surname
// console.log(user.fullName)

// //getter setter ไม่ควรเรียกตรงๆ แบบ code ข้างบนนี้ ให้เขียน getter setter เพื่อเรียกใช้

// //setter กำหนดเงื่อนไขได้ เช่น ในตัวอย่างกำหนดเงื่อนไขว่า str ที่ใส่เข้าไปต้อง > 10

// const name = 'A';
// if (name.length < 4) user.name = name;










// // Inheritance การสืบทอด
// // proto-type

// const arr = [1 , 3];

// // console.log(arr)
// // arr.map = () => alert('modifier map');
// arr.__proto__ = null // set [[Prototype]] = null => ไม่มี method prototype object
// console.log(arr)

// // const newArr = arr.map(item => item + 1);
// // arr.filter() //  arr.filter is not a function เพราะทำการสั่ง __proto__ = null ปิดการใช้งาน proto เลยไม่่รู้จักฟังชันจากการ สืบทอด แล้ว

// // วิ่งไปหาค่าในตัวมันเองก่อน ถ้าไม่มีจะวิ่งไปหาใน _proto_
// // ดึงเอาข้อมูลมาจาก แม่ สืบทอดมา(ไม่ติดตัวมาด้วย) จะได้ไม่ต้องเขียนหลายรอบ

// // ทำงานอยู่เบื้องหลัง และจะถูกซ่อนอยู่

// const obj = { a:1 }

// console.log(obj)
// console.log(obj.toString())

// // 

// let animal = {
//     eats: 'can eat',
//     walk: function() {
//         return this.eats
//     }
// }; //มี proto ของ OBJ อยู่
// let rabbit = {
//     jumps: 'can jump'
// };
  
// rabbit.__proto__ = animal; // ตอนนี้ทำให้ Animal เป็น parent ของ rabbit
// // ทำให้เราไม่ต้องใส่ eats: 'can eat' ใน OBJ{} ของ rabbit
// console.log(rabbit.jumps) // can jump
// console.log(rabbit.eats) // can eat
// console.log(animal.jumps) // หาไม่เจอ = undefined
  
// // ไม่มีค่าในตัวเอง => วิ่งไปหาค่า่ในแม่แบบของมัน ที่มันสืบทอด => ไปหาใน Proto ของแม่มัน / แม่ ของ แม่ ของมัน
// // เป็นได้แค่ OBJ หรือ null เท่านั้น
// // ไม่สามารถให้ สืบทอด เป็นวงกลมได้ ต้องมีจุดสิ้นสุด
// // ถ้าไม่ต้องการใช้ function จาก prototype สามารถเขียนทับได้

// rabbit.eats = 'im laew'; // เพิ่ม eats เข้าไปที่ตัวมันเอง ไม่ได้เซ็ตขึ้นไปบน prototype (แม่)

// console.log(rabbit.walk())
// // return this.eats จากใน prototype animal
// // walk ไม่มี => ไปเช็คใน prototype เจอ this.eats => this ที่อยู่หน้าจุด !'ของตัวเอง'! (ไม่ใช่ของPrototype) => เจอ eats ในตัวเอง => เรียก rabbbit.eats
// // แต่ถ้าไม่เจอ eats ที่ตัวมันเอง => ไปดู eats ที่ prototype => เจอค่า eats ใน prototype แล้วเรียกใช้งาน => animal.eats

// // for...in loop 
// // for...in จะเข้าถึง properties ทั้งหมด ทั้งของตัวเอง และ ที่ถูกถ่ายทอดมาด้วย
// // (Object.keys()) คืนแค่ของมันเองเท่านั้น
// // ใช้ if ใน for...in loop โดยใส่ เงื่อนไข obj.hasOwnProperty(key) จะแสดงแค่ properties ของตัวเอง ไม่แสดงที่สืบทอด



  

// // การประกาศตัวแปร new Keywords คล้ายๆกับการประกาศ Class
// // console.dir = เพื่อแสดง Protorype
// // Prototype สืบทอดกันเป็นทอดๆ แม่ > ลูก > หลาน 
// // F.Prototype ใช้ตอนเราทำnew Keyword ( new F() )
// // เหมือนกับเรื่องก่อนๆ การประกาศอะไรแล้ว ถ้าเปลี่ยนทีหลัง ค่าของ Protorype ที่เคยประกาศไปแล้วก็ไม่เปลี่ยน

// // let animal = {
// // eats: true
// // };

// // function Rabbit(name) {
// // this.name = name;
// // }
// // console.log(Rabbit.prototype.constructor === Rabbit)

// // Rabbit.prototype = animal;

// // let rabbit = new Rabbit("White Rabbit"); 
// // //  rabbit.__proto__ == animal

// // console.log( rabbit.eats ); // true
  
// // let newAnimal = {
// //     eats: false
// // };

// // let newRabbit = new Rabbit("Black Rabbit"); 
// // //  rabbit.__proto__ == animal

// // console.log( newRabbit.eats ); // true

// // ฟังก์ชัน วิ่งกลับไปหาตัวมันเอง
// // modifire มันแล้ว constuctor จะหายไป
// // !!คอมเมนต์ทิ้งด้วย เดี๋ยวข้างล่างไม่ run!!

// function Rabbit(name, age) {
//     this.name = name;
//     this.age = age;
//     this.isAnimal = true;
// }

// // ตัวอย่างเวลาเรียกใช้ฟังชัน rabbit แล้ว
// // proto ของ rabbit = {
// //     constructor: function(name, age) {this.name = name; this.age = age; this.isAnimal = true;} Rabbit // ฟังชันที่ยังไม่เรียกใช้
// //     eats: true
// // }

// Rabbit.prototype.eats = true; // เพิ่มค่า eat = true เข้าไปใน protorype

// let rabbit = new Rabbit("constructorRabbit", 2); // เวลาประกาศ จะไป Inherit มาจากตัว Protorype => เรียกฟังก์ชัน Constructor
// // สร้าง Object ผ่านฟังชัน Constructor => rabbit = { name:'constructorRabbit', age:2 } โดยไม่เอาตัว eats: true จาก proto มา
// //rabbit.constructor('constructorRabbit', 2); //ทำให้อัตโนมัติ โดยไม่ต้องสั่งอีก

// console.log(Rabbit.name) // ไปใช้งานฟังก์ชัน
// console.log(Rabbit.age) // ไปใช้งานฟังก์ชัน // live server ไม่ขึ้น พิมพ์เช็คเอา

// // Constructor กำหนดว่าเป็นฟังก์ชันอะไร แต่ยังไม่เรียกใช้ เมื่อเรียกใช้จะทำให้อัตโนมัติ
// // Consturctor หายไป

// let animal = {
//     eats: true
//     };

// Rabbit.prototype = animal // กำหนด prototype ทับ จะทำให้ function หายไป ใช้งานฟังชันแบบไม่ได้อีกเพราะ prototype หายไป
// Prototype ของตัวแม่ ไม่สามารถลบจาก Object ลูก ได้


// // การสร้าง Prototype Function การประกาศค่า การเพิ่ม/ลบ
// let animal = {
//     eats: true
// };

// let newAnimal = {
//     eats: false
// };

// function Rabbit(name, age) {
//     this.name = name;
//     this.age = age;
//     this.isAnimal = true;
// }

// Rabbit.prototype = {eats: true} // ทับกับ animal OBJ PROTO = หายไปเลย
// //Rabbit.prototype.jumps = true; // การเพิ่มค่าเข้าไป หรือ แก้ไขค่า เข้าไปใน prototype Rabbit Function

// const rabbit = new Rabbit() // Prototype { eats : true }
// console.log(rabbit.eats) // true

// Rabbit.prototype = {eats: false} // มีผลกับตัวแปรที่ประกาศหลังจากนี้ แต่ไม่มีผลกับตัวแปรก่อนหน้านี้ที่ประกาศไปแล้ว

// console.log(rabbit.eats) // true เพราะประกาศก่อน eats:false

// const newRabbit = new Rabbit() // Prototype { eats : false }
// console.log(newRabbit.eats) // fales

// // Static Method & Instace Method
// // const arr = new Array([1 , 3])
// // // arr.map // filter reduce concat

// // Array.from(new Set());

// const data = new Date();
// Date.getMoth() // Instace Method

// Date.now() // now timestamp // Static Method

// Insatace = OBJ method เป็นสิ่งที่ OBJ เรียกใช้ => Method กระทำกับ ตัว OBJ โดยตรง ต้งมี OBJ รองรับ
// ชื่อ Class แล้วขึ้นต้นด้วยตัวใหญ่ = Static Method => ไม่ขึ้นอยู่กับ OBJ ใดๆ ใช้งานได้ทันที เช่นการทำคำนวณทางคณิตศาสตร์

// ตัวอยู่สูงสุด = OBJ PROTO เหนือกว่านั้น ไม่มี = null
// ทุกอย่างถ่ายทอดมาจาก OBJ 
// console.dir เพื่อดู Proto แบบชัดๆ PROTO ของตัวเอง => PROTO OBJ => null

// Primitive ทำตัวเองให้เสมือนเป็น OBJ โดยจะเอา OBJ มาห่อหุ้มตัวเอง แล้วไปเรียก PROTO OBJ มาใช้
// null undefined จะไม่มี OBJ ห่อหุ้ม

// //สร้างfunction ให้กับ String
// const str = 'abc';
// const str2 = 'def';

// String.prototype.show = function() {
//     alert(this);
// };

// str.show()
// str2.show()

// เขียนฟังชัน แบบยืม Prototype
// let obj = {
// 0: "Hello",
// 1: "world!",
// length: 2,
// };

// obj.join = Array.prototype.join; // เพิ่มฟังชัน join เข้าไปใน Proto โดยแทนค่าด้วย obj.join()

// console.log( obj.join(',') ); // เรียก obj.join(',') => Hello,world!

// // Set Timeout ตั้งเวลาก่อนทำการ run
// function log() {
//     console.log('Hello Set Timeout');
// };

// // setTimeout(() => {  //ตั้งเวลา ก่อนที่จะทำการ Run Function (เป็น callback function)
// //     log()
// // }, 5000);

// function log(name) {
//     console.log('Hello ' + name);
// };

// function ano() {
//     log('Ano')
// };


// // log() // function ทำงานเลยทันที

// // setTimeout(log('Beer'), 3000); // => setTimeout(undefined, 3000);
// setTimeout(log, 4000, 'Beer'); // => เรียกที่ถูกต้อง
// setTimeout(() => log('Beer'), 3000); // 3 sec pass ; execute (() => log('Beer'))();
// setTimeout(ano, 3000, ); // => เรียกที่ถูกต้อง

// // clearInterval ตั้งเวลา หยุดการ run
// const timeId = setInterval(() => console.log('every 1.5 second'),1500);

// setTimeout(() => clearInterval(timeId), 4000); // ตั้งให้หยุด ฟังชันที่กำหนด เมื่อผ่านไปเวลาเท่าไร







  



// Syntax เบื้องต้น 
//สำหรับการเขียน Class

// // การประกาศ class และการสรา้ง class #1
// class Rabbit {
//     constructor() {
//         console.log('constructor')
//     }


//     walk() {
//         console.log('walk')
//     }

//     jump() {
//         console.log('jump')
//     }
// }

// const rabbit = new Rabbit(); // เมื่อมีการสั่งสร้าง จะไปทำงานที่ตัว constructor => จะ console.log('constructor')
// rabbit.walk()
// rabbit.jump()

// // การประกาศ class และการสรา้ง class #2
// class User {
//     isAnimal = true // ตรงนี้เป็น PROPERTY ข้างล่างเป็น method(ตัวเหลืองๆ?)

//     constructor(fname, lname) {
//       this.fname = fname;
//       this.lname = lname;
//     }
  
//     checkIsAnimal() {
//         console.log(this.isAnimal);
//     }

//     sayHi() {
//       console.log('Hi ' + this.fname + ' ' + this.lname);
//     }
  
// }
// //จบการประกาศ class#2

// //วิธีเรียกแแบบนี้ไม่เห็น React.js จะจัดการให้เราทั้งหมด
// const user = new User('W','K'); // สร้าง class จาก constructor ; มี PROPERTY 3 ตัว METHOD 2 ตัว
// user.sayHi(); // hello undefined เพราะสั่ง constructor แต่ยังไม่กำหนดค่าให้มัน
// user.checkIsAnimal();

// constructor เป็น method ตัวนึง => method constructor

//อธิบายข้างบนแบบละเอียดๆ(มั้ง)
// function User(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// }
// defualt PROTOTYPE { constructor : User } => สร้าง OBJ จาก FUNC ด้านบน => ทำตัวเองให้เป็น class โดยเอา FUNC มาดัดแปลง
// const user = new User('W','K');  => สิ่งที่ class ทำ กำหนด ค่า แล้วเซ็ต PROTOTYPE ตามด้านหลัง
// User.prototype.checkIsAnimal = function() {
//         console.log(this.isAnimal);
// }
// User.prototype.sayHi = function()
//       console.log('Hi ' + this.fname + ' ' + this.lname);
//     }
// }

// class constructor ต้องสร้างจาก new KEYWORD เท่านั้น ไม่สามารถเรียกเหมือนเรียกฟังชันได้
// User(); // Error: Class constructor User cannot be invoked without 'new'
// Method ใน Class จะหาไม่เจอโดย for...in
// Class ทั้งหมด อยู่ในโหมด use strict (เกี่ยวกับ var let)
// มี getter setter เช่นกัน ( เหมือน literal OBJ )
// ประกาศ Class ไม่มี commar ขั้น ระหว่าง {} เพราะมันไม่ใช่ OBJ ไม่งั้นจะ ERROR
// constructor Method ถูกเรียกทุกครั้ง ทำงานคนแรกตลอดทันที เมื่อมีการสร้าง class ฟังชันอื่นๆจะทำงานทีหลัง

// // Inheritance การถ่ายทอด
// // ใช้ 'extends' KEYWORD
// // วิธีใช้ class ลูก extends แม่
// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
// }

// // let animal = new Animal("My animal");
  
// class Rabbit extends Animal{
//     constructor() { // การจะ Overriding constructor ต้องเขียน super ให้มันเสมอ ไม่งั้นจะ error
//         super(); // <= ต้องมีตัวนี้เสมอ เป็นการเอาคุณสมบัติของตัวแม่มาใช้
//         this.age = 2;
//         this.name = 'A';
//     }

//     hide() {
//         console.log(`${this.name} is hidden`);
//     }

//     run(speed) { // ตัวล่าง overwrtie ตัวบนเสมอ
//         console.log(`${this.name} is a rabbit and run with speed ${this.speed}`);
//     }

//     stop() { //รันตัวเองก่อน แล้วใช้ .super ไปรันที่ตัวแม่มันต่อ
//         console.log('child')
//         super.stop()
//     }
// }

// const rabbit = new Rabbit('Ke'); //เรียก Contruc ของ animal => this.name = name ที่ส่งไป
// rabbit.run(5)
// rabbit.stop(0)
// rabbit.hide(0)

// // super. = ตัวที่ extend มา / this. = ตัวมันเอง
// // OBJ ลูก ที่สร้างจาก class แม่ ด้วยการ extend จะเข้าถึง Method ทั้งหมดของแม่ (และมากกว่าถ้าเป็นหลาน ; หลาน > ลูก > แม่) (หลานไม่เจอในลูก > หาในแม่ต่อ)










// การ Impoer Export
// เกิดขึ้นเมื่อมี Module เนื่องจากต้องการใช้ code จาก ไฟล์อื่น
// กำหนด type ให้ tag script JS => src type='module'
// scope ของตัวแปรจะอยู่แค่ในไฟล์ตัวเองเท่านั้น จะข้ามไปไฟล์อื่นไม่ได้

// form '.' คือ relative กับตัวที่มันอยู่ ทำให้ทำ link ไปไฟล์อื่นได้ง่ายขึ้น
// export ออกจากไฟล์นึง ให้สามารถใช้นอกModuleได้ 
// import เข้าไปที่อีกไฟล์นึง เป็นการนำจาก Module อื่นมาใช้ ; สามารถกำหนดแค่ตัวแปรที่ต้องการได้ ไม่ต้องเอาทั้งหมด

// name export 
// export import ออก/เข้าเป็นชื่อ ต้องชื่อตรงกัน ตอน import {ชื่อที่exportออกมา} ต้องใส่วงเล็บปีกกาครอบชื่อที่ export ออกมา
// export ชื่อ ; import {ขื่อ} form './pathของไฟล์' ; ออกจากpath ../ ออกกี่ path ก็ .. ไปจำนวนตามต้องการ
// การรันจะเกิดแค่ครั้งแรกที่มีการ Import เท่านั้น ; ถ้า Import เกิน 1 ครั้งก็จะรันแค่ครั้งเดียวเหมือนกัน (code ที่อยู่ใน import export เช่น alert) 

// export {} => export เป็น list
// การ import ทั้งหมด => import * as {ชื่อที่เก็บ} from 'path';
// เรียกใช้โดย ( ชื่อที่เก็บ . เลือกตัวแปรจากImport )

// Import { ' ' as ' '} => ตั้งชื่อเล่นให้กับตัวแปรที่เราจะทำการ Import เข้ามา
// Export{ ' ' as ' '} => ตั้งชื่อเล่นให้กับตัวแปรที่เราจะทำการ Export ออกไป *ได้เฉพาะแบบที่มี {} เท่านั้น

// บาง Moduel จะ Import มาใช้แค่อันเดียว

// default export 
// Export default Person > Import P ชื่อไม่ตรง ตัวโปรแกรมมันก็รับรู้ได้ด้วยตัวเอง เนื่องจาก export default มันจะมีแค่ตัวเดียว; ไม่ต้องใส่ {} ในการ import
// หลักการตั้งชื่อ default export ที่ดี คือ ตั้งให้เหมือนชื่อไฟล์
// exprot default ตัวแปรไม่ได้ ต้องลบสิ่งที่เป็น let var const และสิ่งที่เป็นตัวแปรออกไปให้หมด










// given n an integer return smallest integer greater than n and the 
// sum of whost digit is twice as big as
// the sum of digit of n


// Given N = 14 ,function should return 19. The sum of digit 19 (1+9=10) 
// is twice as big as sum of digits of 
// 14(1+4=5)
// Given N = 10 the function should Return 11
// Givng N = 99 the funtion should return 9999
// N is integer within range[1..500]

// ใส่ N = 14 ผลรวมเลขโดดเป็น 5
// สิ่งที่ต้องการ 
// 1. result > N (14) 
// 2.  ผลรวมเลขโดดของ result ต้องเป็น 2 เท่าของผลรวมเลขโดดของ N ผลรวมเลขโดดของ N (1+4=5)  
// ผลรวมเลขโดดของ result (1+9=10)
// 3. result เป็นเลขที่น้อยที่สุด

number = 99;
numberString = new String(number)
numberSplit = numberString.split('');

if (numberSplit[1] == undefined) {
    numberSum = +(numberSplit[0]);
} else if (numberSplit[2] == undefined) {
    numberSum = +(numberSplit[0]) + +(numberSplit[1]);
} else {
    numberSum = +(numberSplit[0]) + +(numberSplit[1]) + +(numberSplit[2]);
}


console.log(numberSum);

// returnDigit = numberSum + number;
numberSum2 = (numberSum*2);

console.log(numberSum2)

numberSum2_1 = numberSum2 - 1
numberSum2_0 = numberSum2 - numberSum2_1

numResult =  String(numberSum2_0) + numberSum2_1

console.log(numResult)

// numberSum2String = new String(numberSum2)
// numberSum2Split = numberSum2String.split('');

// console.log(numberSum2Split)

// console.log(numberSum2_1)
// console.log(numberSum2_0)

// console.log(numberSum2_1_arr)
// console.log(numberSum2_0_arr)

// console.log(returnDigit)





// if (numberSplit[1] == undefined) { 
//     numberSum = +(numberSplit[0]);
// } else {
//     numberSum = +(numberSplit[0]) + +(numberSplit[1]);
// }


// if (numberSplit[1] == undefined) {
//     numberSumDigit = numberSum*2
// }




// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
























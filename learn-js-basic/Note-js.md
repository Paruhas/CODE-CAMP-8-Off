// send message to console

/*
    console.log('msg from main.js');
    function main is for
    a is
    b is 
    return
    console.log('Same Line');

console.log('Test') //Comment

*/

// alert('My name is PARUHAS - External');

/*
let nickname = 'nickname';
nickname = 'Bank';
console.log(nickname);

let fname = 'Paruhas';
let lname = 'Charoenrat';
let age = '26';

let fname = 'Paruhas',
    lname = 'Charoenrat',
    age = '26';

var fname;
console.log(fname);
fname = 'Paruhas';

console.log(fname);
var fname = 'Paruhas';

console.log(lname)
let lname = 'Charoenrat';

{
    var fname = 'Paruhas';
    let lname = 'Charoenrat';
}
console.log(fname);
console.log(lname);


console.log(fname + ' ' + lname);
console.log(`${fanme} ${lname}`);

const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

let user = null;

console.log(typeof fname )
console.log(typeof(fullname))

let x = 10;
let y = 15;
console.log(`${x+y}`);

const name = 'Tle';
console.log(typeof `hello ${1}`);
console.log(typeof `hello ${name}`);
console.log(typeof `hello ${'name'}`);

let name = 'Bank';
let age = '26';
let address = '16 Moo1';
let profile = 'Name : ' + name + ' Age : ' + age + ' Address : ' + address;
profile = `Name : ${name} / Age : ${age} / Address : ${address}`;
console.log(profile);
console.log(`Name : ${name} / Age : ${age} / Address : ${address}`);

let age = '26';

const a = String(undefined); // 'undefined'
const b = String(null); // 'null'
const c = String(true); // 'true'

const d = '' + age;
const e = `${age}`;
const f = age.toString();
// const g = JSON.stringfy(age); // ไม่แนะนำให้ใช้

console.log(a ,b ,c, typeof a, typeof b, typeof c);

const str = '100';
const a = Number(str);
const b = +str;
const c = str * 1;

console.log(a ,b ,c, typeof a, typeof b, typeof c);

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('')); // 0


console.log(typeof(Number(undefined))); // Number
console.log(typeof(Number(null))); // Number
console.log(typeof(Number(true))); // Number
console.log(typeof(Number(false))); // Number
console.log(typeof(Number(''))); // Number

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(" ")); //true
console.log(Boolean("0")); //true
console.log(Boolean(NaN)); //false

console.log(1 + 4 + '7'); // 57
console.log('1' + 4 + 7); // 147

let age = prompt('Enter your age');
alert(typeof age); // กรอกใน prompt เป็น string ตลอด ถ้าไม่กำหนด

const numPen = 1000; // number
let increasePen = prompt('Enter your new pen','200'); // string
let increasePen1 = +prompt('Enter your new pen','200'); // Number

const newNumPen = numPen + increasePen; // 1000200
const newNumPen1 = numPen + increasePen*1; // 1200 number + number
const newNumPen2 = numPen + +increasePen; // 1200 number + number
const newNumPen3 = numPen + Number(increasePen); // 1200 number + number
const newNumPen4 = numPen + increasePen1; // 1200 number + number

console.log(newNumPen);
console.log(newNumPen1);
console.log(newNumPen2);
console.log(newNumPen3);
console.log(newNumPen4);

console.log(typeof(newNumPen)); // string
console.log(typeof(newNumPen1)); // number
console.log(typeof(newNumPen2)); // number
console.log(typeof(newNumPen3)); // number
console.log(typeof(newNumPen4)); // number
console.log(typeof(numPen)); // number

console.log(21 % 5); // 1
console.log(2 ** 3); // 8
console.log(typeof(21 % 5)); // number
console.log(typeof(2 ** 2)); // number

console.log(0.2 + 0.1); // ควรจะ 0.3 แต่ได้ค่า 0.30000000000000004 เพราะไบนารี่ของคอมพิวเตอร์
console.log(typeof(0.2 + 0.1)); // number

console.log(0.2 + 0.5); // 0.7
console.log(typeof(0.2 + 0.5)); // number

let i = 0;
i = i + 1;
console.log(i);

i++;
i += 1;
i--;

let j = 10;
j += 6; // j = j + 6
j -= 2; // j = j - 2
j *= 3; // j = j * 3
console.log(j);

let a = 1; // a = 1
let b = 2; // b = 2
let c = a++; // c = 1 a = 2
let d = ++c; // d = 2 c = 2
let e = ++d + d++ + d; // d = 3 d = 3 และ d++> d = 4 ; [3 4 4]

const x = 10;

if (x > 5) {
    console.log('Is Greater');
}

const age = prompt('Enter your age :' , ('26'));

if (age > 18) { // ('26' > 18) => (26 > 18) ?
    console.log('More than 18');
} else {
    console.log('Less than 18');
}

const BY = Number(prompt('Enter your Birth Year :' , ('2001'))); // '2001'

let cacuY = 2021 - BY; // 2021 - '2001' => 20

if (cacuY > 20) {
// if (2564 - BY > 20) {
    alert('Age = ' + cacuY + ' More than 20YO'); 
} else if (cacuY === 20) {
    alert('Age = ' + cacuY + ' You are 20YO')
} else {
    alert('Age = ' + cacuY + ' Less than 20YO');
}

const BY = Number(prompt('Enter your Birth Year :' , ('2001'))); // '2001'

let age = 2021 - BY; // 2021 - '2001' => 20

// let message = age < 20 ? 'Unant' : 'OK';

let message = age > 20 ? 'OK' : age===20 ? 'You 20' : 'Unant';

alert(message)

let score = Number(prompt('Enter your SCORE','80'));

if (score >= 80 && score <= 100) {
    alert('A');
} else if (score >= 70 && score <= 79 ) {
    alert('B');
} else if (score >= 60 && score <= 69 ) {
    alert('C');
} else if (score >= 50 && score <= 59 ) {
    alert('D');
} else if (score >= 0 && score <= 49 ) {
    alert('F');
} else {
    alert('WRONG NUMBER');
}

let score = Number(prompt('Enter your SCORE','80'));
let msg;

msg = score >= 80 && score <= 100 ? 'A' : score >= 70 && score <= 79 ? 'B' : score >= 60 && score <= 69 ? 'C' : score >= 50 && score <= 59 ? 'D' : score >= 0 && score <= 49 ? 'F' : 'WRONG NUMBER';
alert(msg);

const x =10;
const y = 5;
const isXGreaterThanY = x > y;

const z = 0;
const w = x || y || z; // w = x = 10

const x = 0; // 10 => 0
const y = 5;
const isXGreaterThanY = x > y;

const z = 0;
const w = x || y || z; // w = y = 5 ;

const x = 0; // 10 => 0
const y = undefined ; // 5 => undefine
const isXGreaterThanY = x > y;

const z = 0;
const w = x || y || z; // w = z = 0 ; 0 = false

const username = prompt('Enter username') || 'Guest';   // prompt 'Tle' => username = 'Tle'
                                                        // 'cancel' null => username = 'Guest'


function max(a , b) {
    return a > b ? a : b;
}

const isMax = max(5 , 7)
console.log(isMax)


let x = 0; // false
let y = undefined ; // false
let isXGreaterThanY = x > y;

let z = 55;
let a = x && y && z; // a = 0

x = 1; // x => 1 true
a = x && y && z; // a = y = undefined false
y = 'undefined'; // y = 'undefined' true
a = x && y && z; // a = z = 55 true


const username = prompt('Enter Username');
const isFilled = !!username; // Boolean(username) 


alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 2 ; bcz !!alert(1) = undefined = false
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // undefined ; !!alert(1) = undefined = false
alert( null || 2 && 3 || 4 ); // 3 ; 2 && 3 bcz all true selected ค่าสุดท้าย => 3 = true


let user;
let isFilled;
user = prompt('enter user','Admin');
isFilled = !!user;

if (isFilled == false) {
    alert('User cancel');
} else if (user == 'Admin') {

    pass = prompt('Password plz','codecamp#8');
    isFilled = !!pass;

        if (isFilled == false) {
            alert('Pass cancel');
        } else if (pass == 'codecamp#8') {
            alert('Welcome');
        } else {
        // } else  if (pass !== 'codecamp#8') {
            alert('Wrong password!');
        }

} else {
// } else  if (pass !== 'codecamp#8')  {
    alert('WTF r U?!');
}


const username = prompt('Enter username');

if (username) {
    if (username === 'Admin') {
        if (prompt('Enter Password') === 'codecamp#8') {
            alert(' ยินดีต้อนรับ');
        } else {
            alert('Wrong Password');
        }
    } else {
        alert('ผมไม่รู้จักคุณ');
    }
} else {
    alert('ยกเลิก')
}


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while (i <= 5) {
    console.log(i); 
    i++; //  i = i + 1 , i++ , i += 1
}


let j = 1;
do {
    console.log(j);
    j++;
} while ( j <= 5)


let username;
username = prompt('Enter username');

while (username === '') {
    alert('กรุณากรอก');
    username = prompt('Enter username'); 
}

if (username) {
    if (username === 'Admin') {
        if (prompt('Enter Password') === 'codecamp#8') {
            alert(' ยินดีต้อนรับ');
        } else {
            alert('Wrong Password');
        }
    } else {
        alert('ผมไม่รู้จักคุณ');
    }
} else {
    alert('ยกเลิก')
}


for ( begin ; condition ; step ) {
    body
}


for ( let i = 1; i <= 5; i++ ) {
    console.log(i)
}

// iteration 1 ; i = 1 check i <= 5 ==>> true ==>> executed code in body
// log(i) = 1 ==>> increase i by 1 ==>> i = 2

// iteration 2 ; i = 2 check i <= 5 ==>> true ==>> executed code in body
// log(i) = 2 ==>> increase i by 1 ==>> i = 3

//
//
//

// iteration 5 ; i = 5 check i <= 5 ==>> true ==>> executed code in body
// log(i) = 5 ==>> increase i by 1 ==>> i = 6

// iteration 6 ; i = 6 check i <= 5 ==>> false
// End loop


let i = 1
for ( ; i <= 5; i++ ) {
    console.log(i);
}


let i = 1
for ( ; i <= 5; i++ ) {
    console.log(i);
    if (i === 2 ) break;
}


let i = 1
for ( ; i <= 10; i++ ) {
    if (i % 2 === 1) continue;
    console.log(i);
}


let i = 0;
while (++i < 5) console.log( i ); // (เอา i ที่ + แล้วไปเปรียบเทีย < 5) แล้ว console.log แสดงค่า i ที่บวกแล้ว
// แสดงค่า 1 2 3 4 เพราะรอบที่ 5 (iที่+แล้ว) == 5<5 ==>> false ไม่แสดง console.log
// รอบที่ 1 ตอนเปรียบเทียบเป็น 1<5

i = 0;
while (i++ < 5) console.log( i ); // (เอา i ที่ยังไม่ + ไปเปรียบเทียบ < 5) แล้ว console.log แสดงค่า i ที่บวกแล้ว
// แสดงค่า 1 2 3 4 5 เพราะรอบที่ 5 (iที่ยังไม่+) == 4<5 ==>> true แสดง console.log
// รอบที่ 1 ตอนเปรียบเทียบเป็น 0<5


for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
  }

i = 0;
while ( i < 3 ) {
    console.log( `number ${i}!` );
    i++;
}


*/

// let Num1 = prompt('Enter Number 1-100');

//     while (Num1 <= 1 && Num1 > 100 || Num1 == null); {
//         alert('Enter Number 1-100 !!!')
//         Num1 = prompt('Enter Number 1-100');
//     }

// let Num2 = prompt('Guest Number 1-100');

//     while (Num2 <= 1 && Num2 > 100 || Num2 == null); {
//         alert('Guest Number 1-100 !!!')
//         Num2 = prompt('Guest Number 1-100');
//     }

/*


let answer = prompt('Enter correct number');


if (answer > 100 || answer < 0) {
    alert('Invalid answer');
    answer = prompt('Enter correct number');
} else if (answer == null) {
    alert('Player 1 answer CANCEL');
    answer = false;
}

if (answer == null) {
    alert('GAME END : Player 1 not enter answer number');
}


while (answer !== null) {
    const guestNumber = prompt('Guest your number');

    if (guestNumber == null) {
        alert('Player 2 guest CANCEL');
        guestNumber = false;
        break
    }

    if (guestNumber > 100 || guestNumber < 0) {
        alert('Invalid Number');
        continue;
    }

    if (guestNumber === answer) {
        alert('Correct')
        break;
    }

    if (guestNumber > answer) {
        alert('มากไป');
        continue
    }

    if (guestNumber < answer) {
        alert('น้อยไป');
        continue
    }
}


*/


//เฉลย แบบฝึกหัด 6

/*

const answer = prompt('Enter correct answer number');

let guestNumber;

while (answer !== guestNumber) {
    guestNumber = prompt('Enter guest number again');
    if (guestNumber > answer) {
        alert('ค่ามากไป');
    } else if (guestNumber < answer) {
        alert('ค่าน้อยไป');
    }
}

alert('Correct ')


const answer = prompt('Enter correct answer number');

let guestNumber;

while (answer !== guestNumber) {
    guestNumber = prompt('Enter guest number again');
    if (guestNumber > answer) {
        alert('ค่ามากไป');
    } else if (guestNumber < answer) {
        alert('ค่าน้อยไป');
    }
}

alert('Correct ')


let a = 5;

switch(a) {
    case 1:
        alert(1)
        break;
    case 2:
        alert(2)
        break;
    case 3:
        alert(3)
        break;
    case 4:
        alert(4)
        break;
    default:
        alert('Other')
}

if (a === 1) {
    alert(1)
} else if (a === 2) {
    alert(2)
} else {
    alert('Other')
}
    

const word = prompt('Enter anything (apple orange dog cat)');

switch(word) {
    case 'apple':
        // alert('fruit')
        // break;
    case 'orange':
        alert('fruit')
        break;
    case 'dog':
        alert('animal')
        break;
    case 'cat':
        alert('animal')
        break;  
    default:
        alert('Not categorized')
        break;
}

if (word === 'apple') {
    alert ('fruit');
} else if (word === 'orange') {
    alert ('fruit');
} else if (word === 'dog') {
    alert ('animal');
} else if (word === 'cat') {
    alert ('animal');
} else {
    alert ('Not categorized');  


browser = prompt('Edge,Chrome,Firefox,Safari,Opera');

if ( browser === 'Edge' ) {
    alert( "You've got the Edge!" );
} else if ( browser === 'Chrome' || browser === 'Firefo x' ||browser === 'Safari' ||browser === 'Opera' ) {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}


const radius1 = 10;
const radius2 = 5;
const radius3 = 20;

const area1 = 3.14 * radius1 ** 2 ;
const area2 = 3.14 * radius2 ** 2 ;
const area3 = 3.14 * radius3 ** 2 ;

function calculateCircleArea() { // radius = 10
    //function body
    if (Number(radius)) {
        if (Number(radius) > 0) {
            return 3.141728 * radius ** 2
        } else {
            return 'radius must greater than zero'
        }
    }
    return 'radius must be numeric';
}

function showTextInconsole() {
    console.log('Hello World') // (2)
    return 'Hello World Form Return' // (3)
}

let result = showTextInconsole(); // (1) (4)
console.log(result) // (5)


function showTextInconsole() {
    console.log('Hello World') // (2)
    // return 'Hello World Form Return' //
}

let result = showTextInconsole(); // (1) (3) return undefined ==>> result
console.log(result) // (4)


function showTextInconsole(name) { // name = 'Beer'
    console.log(`Hello ${name}`) 
    // return 'Hello World Form Return' 
}

let result = showTextInconsole('Beer');
console.log(result)


function min(a , b) { 
    let result;
    if ( a > b ) {
        result = b;
    } else {
        result = a;
    }
    return result;
}

min(); // a , b = undefined
min(1); // a = 1 , b = undefined
min(1 , 5); // a = 1 , b = 5

const minVal = min(1 , 5);


// เขียนฟังก์ชันคำนวณ พื้นที่สี่เหลี่ยม ด้านกว้าง w ด้านยาว l
// w = 2, l = 6 

function squareWL() {
    if (Number(w) && Number(l)) {
        if (Number(w) > 0 && Number(l) > 0) { 
            return `This Square W*L is ${w*l}`
        } else return 'must not 0'
    } else return 'must be a NUMBER'
}

let w = prompt('Width :');
let l = prompt('Length :');
alert(squareWL());


//ยกตัวอย่าง global VS local

let value = 20; // global var

function testValueScope() {
    let value = 30; // local var สำคัญกว่าเสมอในการ run function ข้างใน + ยิ่งมี let ยิ่งสำคัญ
    console.log('line 713 :' + value)
    value = 15 // ถ้า 712 ไม่มี let + 719 จะได้ค่า = 15
}

console.log('line 717 :' + value)
testValueScope()
console.log('line 719 :' + value)

//วิธีแก้ เปลี่ยนค่า value ให้ชัดเจน เลี่ยงการตั้ง global

let value = 20;

function testValueScope(sendValue) {
    let value = 30; 
    console.log('line 713 :' + sendValue)
    value = 15;
}

function testValue2() {
    value = 26;
}

console.log('line 717 :' + value)
testValueScope(value) // ส่งค่า 20 จาก 725 เข้าไปในตัวแปร value =20 => sendValue =20
console.log('line 719 :' + value)


let value = 20;

function testValueScope(sendValue) {
    let value = 30; 
    console.log('line 747 :' + value);
}

console.log('line 750 :' + value);
testValueScope()
console.log('line 752 :' + value);


// การกำหนด default value
// ท่าใหม่
function alertName(name = 'Guest') { 
    // ถ้า name ไม่ถูกส่งเข้ามา จะ default เป็น 'Guest' = let showAlertMessage = name || 'Guest'
    alert(`Hello ${name}`);
}

// ท่าเก่า
function alertName(name = 'Guest') { 
    let showAlertMessage; 
    if (!name) showAlertMessage = 'Guest'; // ถ้า name ไม่ถูกส่งเข้ามา จะ default เป็น 'Guest'
}

alertName(`Bank`)
alertName();




// showMessage();
// showMessage("Jit");
// showMessage("Tle",'Welcome to our Website');

// function showMessage(name = "Anonymous", text){
//     let defaultWelcomeText = "Hello everybody"
//     console.log(`Hello  ${name}`);
//     console.log(text ? text : defaultWelcomeText);
// }

// showMessage();
// showMessage("Jit");
// showMessage("Tle",'Welcome to our Website');
// showMessage;


const showMessage = function(name = ' Anoy', text) {
    console.log('Hello' + name);
    console.log(text);
};

// showMessage();
// showMessage();
// showMessage("Jit");
// showMessage("Tle",'Welcome to our Website');

console.log(showMessage)

const showWelcomeText = showMessage();
// console.log(showWelcomeText)
// showWelcomeText();

const myAlert = alert;
console.log(myAlert);
myAlert('Hello CC8');



  function showOk() {
    alert( "You agreed." );
  }
  function showCancel() {
    alert( "You canceled the execution." );
  }
  function ok(isOk, alertOk, alertCancel) {
    // console.log(alertOk)
    // console.log(alertCancel)
    if (isOk) {
        alertOk();
    } else {
        alertCancel();
    }
  }

ok(true, showOk, showCancel); //alert 2 ครั้ง เก็บค่าเข้าไปในตัวแปร (undefined 2 ตัว)


function showOk1(message) {
    alert( message );
    }

function showCancel1(message) {
    alert( message );
}

function ask(question, alertOk, alertCancel) {
    const isOk = confirm(question);
    if (isOk) {
        alertOk('Yes');
    } else {
        alertCancel('No');
    }
}

ask('Are u Mad', showOk1, showCancel1);

function showOk1(message) {
    alert( message );
    }

function showCancel1(message) {
    alert( message );
}

function ask(question, alertOk, alertCancel) {
    const isOk = confirm(question);
    if (isOk) {
        alertOk('Yes');
    } else {
        alertOk('No');
    }
}

ask('Are u Mad', showOk1);


function returnFunc() {
    return function() { // anonymous function
        console.log('This is return function');
    };
};

const resultFromReturnFunc = returnFunc();
resultFromReturnFunc();

returnFunc(); // ฟังขัน ที่ return ค่าเป็น anonymous function = ไม่แสดง เพราะเป็นฟังชันเฉยๆที่ไม่ทำงาน 
//ต้อง console.log(returnFunc()) = แสดงฟังชัน (เพราะไม่มี()ข้างหลังอีกที)
returnFunc()(); // เรียกใช้ฟังขัน anonymous function แบบให้ทำงาน


fs.readFile('text.txt', function() {
    console.log('Succ')
}) // ทำงาน 1060 แล้ววิ่งไปทำ 1065 ต่อเลย โดยไม่รอ 1060 เสร็จ 
//จะ call มันเมื่อทำอะไรเสร็จหรือไม่เสร็จ

console.log('Do');
console.log('After');
  

function showMessage () {

}

const showMessage = function() {
    
};

const showMessage = () => { 

}; //arrow function
// ทั้ง 3 แบบ มีค่าเหมือนกัน


const showMessage = (name, text) => { 
    console.log('Hello ' + name);
    console.log(text);
    return 'Show Message';
};
const result = showMessage('Tle' ,'Hello CC');
console.log(result)


const showMessage = name => { // เฉพาะ arrow function ในกรณี function มี parameter ตัวเดียว ไม่ต้องใส่วงเล็บก็ได้
    console.log('Hello ' + name);
    return 'Show Message' + name;
};
const result = showMessage('Tle' ,'Hello CC');
console.log(result)


const showMessage = name => 'Show Message' + name; 
// arrow function body บรรทัดเดียว สามารถเขียนแบบ shorthand ได้ โดยลบ { } , return แล้วให้มาอยู่บรรทัดเดียวกันหมดได้

const showMessage1 = name => {return 'Show Message' + name }; 
//shorthand arrow fucntion ไม่ลบ { } ต้องมี return ด้วย


function sum(a, b) {
    return a + b;
};
//วิธีปกติ

const sumDeclaration = function(a , b) {
    return a + b;
}
//วิธี declaration

const sumArrow = (a , b) => a + b;
//วิธี arrow
const sumArrow = (a , b) => {return a + b };
//มีปีกกา ถ้าอยาก return ต้องไปกำนหดใน body ของมัน 
//ไม่มีปีกกา คือมี return ที่มองไม่เห็น


//Object
// userData email firstName lastName birthDate point address saleHistory
const userEmail = 'tle@gmail.com';
const userFirstName = 'Wissanu';

const user = {
    email = 'tle@gmail.com' ,
    firstName = 'Wissanu' 
}

const getUser = () => 
//     {
//     return {
//         email = 'tle@gmail.com' ,
//         firstName = 'Wissanu' 
//     }
// };
// วิธีที่ 1 return ก้อน obj ออกมา return {{ก้อนobj}}; 

(
    {
        email = 'tle@gmail.com' ,
        firstName = 'Wissanu'
    }
);
// วิธีที่ 2 ไม่ต้องใส่ return ก้อน obj ออกมา ({ก้อนobj});


const checkRole = role => () => role === 'user' ? 'member' : 'guest';

// role แรกเป็น fn role fn ข้างในเป็น fn เช็ค role ว่าเป็น user ไหม
// {role === 'user' ? 'member' : 'guest';} คือ if else แบบสั้น

// Arrowข้างบนแบบDeclaration
const checkRole1 = role => () => { //role เป็น parameter ของฟังชัน checkRole1
    if (role === 'Account') {

    } else if (role === 'Store') {
        
    }
};

// () => {  body  }
const checkRole1 = role => { //ข้างบน แบบไม่ anoymous fucntion
// role === 'Account' ? ['getAllSael', 'getAllAccount'] : ['getAllStock', 'getStockLost']
    return () => {
    if (role === 'Account') {
        return ['getAllSeal','getAllAccount']
    } else if (role === 'Store') {
        return ['getAllStock','getStockLost']
    } else if (role === 'HR') {
        return ['salary']
    }
    };
}

const permission = checkRole1(role);

//ใช้ในการเขียน permission access เว็บไซต์ต่างๆ

// Declarationข้างบนแบบยาว
function checkRole(role) {
    return function () {
        if (role === 'Account') {

        } else if (role === 'Store') {
            
        }
    }
}


//Object declate

//Object declate วิธีที่ 1
const person = {
    nickName: 'Jit',
    'age': '14',
    "isAdult": true,
    address: {
        road: 'Banthatthong',
        knet: 'Pathumwan',
        changwat: 'Bangkok',
        postalCode: '10330'
    },
    for: 'U',
    function: 'func',
    'has car': true,
    hasCar: true,
};
// //สามารถไม่ใส่/ใส่ quote ตรง key ก็ได้
// // object nest ได้ (Object ซ้อนๆกัน)
// //key แบบเว้นวรรค ต้องครอบด้วย quote แต่ไม่แนะนำให้ทำ


// //Object declate วิธีที่ 2
// const person = new Object();

// //วิธีเรียกใช้ วิธีที่ 1
// const nickname = person.nickname;
// const age = person.age
// const changwat = person.address.changwat;
// //เวลาเรียกใช้ obj.ชื่อของคีย์ที่ต้องการ ถ้าเป็น obj nest ก็ obj.obj.key และคีย์ไม่ต้องใส่ quote
// //ใช้เรียก ค่าคีย์ที่เว้นวรรค ไม่ได้
// //วิธีที่นิยมใช้กันมากที่สุด

// //วิธีเรียกใช้ วิธีที่ 2
// const fort = person['for'];
// const hasCar = person['has car'];
// let road = person['address'].road;
// road = person['address']['road'];
// road = person.address['road'];
// //ต้องใส่ bracket > quote เสมอ
// //ใช้เรียก ค่าคีย์ที่เว้นวรรค ได้
// //ใช้กรณีที่มีการเว้นวรรค กับกรณีที่มีvalueเป็นตัวแปล

// //วิธีการเรียก obj ผ่านตัวแปร
// let inputKey = 'function';
// inputKey = prompt('enter key to find obj. value'); // inputKey = 'function' , inputKey = 'age'
// // let kValue = person.inputKey; // wrong
// kValue = person[inputKey] // = person['function'] , person['age']
// console.log(kValue)



//เพิ่ม property ใหม่ให้ obj
console.log(person.color)
person.color = 'brown';
console.log(person.color)

//อัพเดต/แก้ไข property ค่า value ของ key ที่มีอยู้ใน obj อยู่แล้ว
person.color = 'red'
console.log(person.color)

//ลบ property
delete person.color
console.log(person.color)

//วิธีแบบใช้ bracket
person['color'] = 'green';
delete person['color'];

//วิธี add key ที่รับค่ามาจาก ข้างนอก obj
const keyToAdd = 'sex';

const Human = {
    name: 'Tle',
    age: 20,
    address: 'Bangkok',
    isSingle: false,
    iq: 9.9,
    [keyToAdd]: 'male',
};

//property value Shorthand
//เขียนขอinput
const firsName = prompt('Enter firsName');
const lastName = prompt('Enter lastName');
const age = +prompt('Enter age');

//เขียนObj.แบบปกติ
const user = {
    firsName: firsName,
    lastName: lastName,
    age: age
};

//เขียนObj.แบบ shorthand โดยตัว key กับ value ต้องค่าเหมือนกัน
const user = {
    firsName,
    lastName,
    age
};

//Property names limitations การตั้งชื่อ ถ้า key เป็น number ต้องใช้วิธีเรียกค่าแบบ bracket
const index = {
    0: 'Zero',
    1: 'One'
}

console.log(indxe['0'])



//เช็คว่ามี Key ใน Object ไหม
const user = {
    firstName : 'Wissanu',
    age: 27
};

const isFirstNameExist = 'firstName' in user;
const isLastNameExist = 'lastName' in user;
console.log(isFirstNameExist)
console.log(isLastNameExist)


//วิธี for loop กับ Obj เพื่อดึงค่า Key Value ออกมาทั้งหมด
const person = {
    nickName: 'Jit',
    'age': '14',
    "isAdult": true,
    address: {
        road: 'Banthatthong',
        knet: 'Pathumwan',
        changwat: 'Bangkok',
        postalCode: '10330'
    },
    for: 'U',
    function: 'func',
    'has car': true,
    hasCar: true,
};

// console.log('Nickname : ' + person.nickName)
// console.log('age : ' + person.age)

for (let key in person) {
    console.log(key + " : " +  person[key])
    // console.log(key + " : " + JSON.stringify(person[key])) // ครอบ Obj nest แปลงให้เป็น string เพื่อแสดงค่าที่ถูกต้อง
}

//copied by Primitive การประกาศตัวแปรตัวที่สองขึ้นมา ก็อปปี้ value กล่องแรก มายังกล่องสอง ค่าของใครของมัน
//copied by reference ไม่เหมิอนตัวแปร primitive ชี้ไปที่จุดจุดเดียวกัน แก้ตัวแปรสองแล้วตัวแปรแรกเปลี่ยนด้วย

//copy by reference
const user = person;

console.log(person.age)
console.log(user.age)

user.age = 44;

console.log(person.age)
console.log(user.age)

console.log(user === person)

const user1 = {
    name: 'a'
};

const user2 = {
    name: 'a'
};

console.log(user1 === user2)
console.log(user1 == user2)

const user3 = user1;

console.log(user1 == user3)

//การเปรียบเทียบ Obj จะดูว่าอยู่ใน Obj(memory?) เดียวกันไหม ถ้าอยู่ใน Obj คนละอันกัน !=
//ถ้า Obj คนละก้อน ในตรรกะ js ไม่สามารถเปรียบเทียบได้ ต้องใช้ for in loop ดึงออกมาก้อนแล้วค่อยเปรียบเทียบ


//การโคลน Obj ไปใส่ที่ Obj อื่น
const user1 = {
    email: 'test@mail.com',
    password: '1234'
};

const user2 = {};

for (let key in user1) {
    user2[key] = user1[key];
}

//ท่าโคลนแบบใหม่
const user3 = {...user};

    // for (let key in person) {
    //     console.log(key + " : " +  person[key])
    //     // console.log(key + " : " + JSON.stringify(person[key])) // ครอบ Obj nest แปลงให้เป็น string เพื่อแสดงค่าที่ถูกต้อง
    // }


//ท่าโคลนแบบเก่า1
const defulatPermission = {canDelete: false, canCreate: false};
const permission1 = {canView: true};
const permission2 = {canEdit: false, canDelete: true};

Object.assign(permission1, permission2, defulatPermission)
//ตัว Object เหมือนเป็น class ตัวหนึ่ง
//ทำการ merge จาก ขวา ไป ซ้าย และถ้าค่าvalueต่างกันจะเอาขวาทับซ้ายด้วย

// result form merge between permission2 and defulatPermission
// {
//     canCreate: false,
//     canDelete: false,
//     canEdit: false
// }

// result form merge between permission1 and result merge form(permission2 and defulatPermission)
// {
//     canCreate: false,
//     canDelete: false,
//     canEdit: false
//     canView: true,
// }

console.log(permission1)
console.log(permission2)
console.log(defualtPermission)

//ท่าโคลนแบบเก่า2
const newMerge = Object.assign({}, permission1, permission2, defulatPermission)
const clone = Object.assign({}, defulatPermission);


const user = {
    firstName: 'Wissanu',
    lastName: 'KonjunD',
    age: 27
  }
  
  const isEmptyObject = obj => {
    // let result = true;
    for (let key in obj) {
      console.log('key: ' + key)
      console.log('value: ' + obj[key])
  
      // result = false;
      // break;
    }
    // return result;
  };
  
  isEmptyObject(user)
  
  // #1 Iteration key = firstName
  // #2 Iteration key = lastName
  // #3 Iteration key = age


const product = {
    id:1,
    name:'Coke',
    price:15,
    desciption:'Coke is the best',
    size:500,
    unit:'bottle',
    'best before': new Date('2022-10-01'),
    distributor : {
        name: 'Coca Cola Thailand',
        address: 'Bangkok'
    }
}

const newProduct = new Object();

//การเรียกค่าจาก Object
//#1
//product.name // 'Coke'
//product.distributor.name // 'Coca Cola Thailand'

//#2
//product['id'] // 1
//product['distributor']['name'] // 'Coca Cola Thailand'
//product['best before'] // 'new Date('2022-10-01')'

product.distributor['name'] // 'Coca Cola Thailand'
product.distributor  // '{name: 'Coca Cola Thailand',address: 'Bangkok'}'

const input = 'price'
product[input] // product['price'] = 20

// การแก้ไขค่า
product.price = 20;;
product.size = 330;
product.distributor = 'Coca Thailand';

//การเพิ่มค่า ทำเหมือนการกำหนดค่าได้เลย
product.discount = 0.8;

// เช็คว่ามีค่าใน Object ไหม
const isIdExist = 'id' in product // true
const isDiscountExist = 'discount' in product // false

if ('discount' in product) {
    const netPrice = product.price * (1-product.discount);
}

for (let k in product) { // Object.key, Object.value , Object.entries
    console.log(`${k}`); // แสดงค่า key ทั้งหมด
    console.log(`${product[k]}`); // แสดงค่า value ทั้งหมด
    console.log(`${k} : ${product[k]}`); // แสดงค่า key : value ทั้งหมด
}

//ลบค่าออกจาก Object
console.log(product.distributor)
delete product.distributor //ลบค่า
console.log(product.distributor)

product.distributor = {name:'New Coca Cola Thailand', address:'New Bangkok'} //เพิ่มค่า
product.distributor.address = 'Nonthaburi' // แก้ไขค่า
console.log(product.distributor)


//การcopyแบบทั่วไป และcopyแบบObject

const user = {
    username: 'testAdmin',
    password: '1234'
}

const admin = user;
admin.username = 'Admin'; // testAdmin => Admin
user.password = 'abcd'; // 1234 => abcd

// console.log(admin.username) // Admin
// console.log(admin.password) // abcd

//อยาก copy Object1 ไปยัง Object2 โดยข้อมูล Object1 ค่าไม่เปลี่ยน
const admin1 = { ...user} ; // การ Clone Object โดยค่าไม่เปลี่ยนตาม
// console.log(admin1)
admin1.username = 'SuperAdmin1'
console.log(admin1)
console.log(user)

//Object Merge เข้าด้วยกัน
Object.assign(user, admin1)
console.log(user)

//Object ประกาศ const แก้ค่า value ได้ แต่แก้ค่า key ไม่ได้


// สร้าง Method ใน Object
// <ชื่อของOBJ>.<ชื่อของPROPERTY> = <FUNCTION>

const person = {
    firstname: 'Wisaanu',
    lastname: 'KongjunD',
    // getFullName: function() { //แบบปกติ
    //     return 'Wissanu KongjunD'
    // }
    getFullName() { //แบบShorthand
        return 'Wissanu KongjunD'
    }
}

person.walk = function() {
    alert('kak kak');
}

// console.log(person.walk());
console.log(person.getFullName());


//this keyword ใน Method
//บ่งบอกถึงตัวมันเอง
// var firstName = 'AAAAA'; // window.firstName = 'AAAAA'

const person = {
    firstName: 'Wisaanu',
    lastName: 'KongjunD',
    getFullName: function() { //แบบปกติ
        // return 'Wissanu KongjunD'
        return this.firstName + ' ' + this.lastName //แบบthis keyword
    }
}

// person.firstName = 'Thongchai';
console.log(person.getFullName());

const getFullName = person.getFullName;
console.log(getFullName())

// window.getFullName();

const user = {
    firstName: 'A',
    lastName: 'B'
}

user.getFullName = person.getFullName;
console.log(user.getFullName());

function getFullName1() {
    return this.firstName + ' ' + this.lastName; 
}
// this = ชื่อ Obj ที่เราใส่ใน function แล้วตัว Obj จะไปดึงค่า key ที่กำหนดออกมา 
// ตามตัวอย่างคือ Obj จะไปดึงค่า key = fistName และ lastName ในตัวมันออกมา

console.log(getFullName1());
person.getFullName1 = getFullName1;
// console.log(person);
console.log(person.getFullName1());
user.getFullName1 = getFullName1
console.log(user.getFullName1());

getFullName1(); // เรียกผ่าน window.getFullName1();
console.log(getFullName1()); //ไม่กำหนดค่า Obj ที่เลือก key จะได้เป็น undefined

var firstName = 'Tle' // เหมิอนกำหนด window.firstName = 'Tle' var อยู่ใน window scope Obj
console.log(getFullName1()); // เหมืือนกำหนด window.getFullName1()


//การเขียน Function Method แบบ Arrow Function
const person = {
    firstName: 'Wisaanu',
    lastName: 'KongjunD',
    // getFullName: function() { //แบบปกติ
    //     // return 'Wissanu KongjunD'
    //     return this.firstName + ' ' + this.lastName //แบบthis keyword
    // }
    getFullName: () => this.firstName + ' ' + this.lastName //แบบthis keyword เวอชั่น Arrow Function
}

console.log(person.getFullName());
//Function This Method ไม่รู้จัก Arrow Function *ใช้ Arrow Function กับ This Method ไม่ได้*


//return this จะดีกว่าการ return ตัว Obj เอง เพราะว่าถ้ามีการ clone Obj ไปแล้ว ตัว return Obj ที่เคยกำหนดไว้จะทำ code bug


//Constructer Function

//การสร้าง Obj แบบเก่า
// const user = new:{}
// const user = new Object();

//การสร้าง Obj แบบ Constructer Function ใข้ new + ชื่อที่ตัวแรกเป็นตัวใหญ่
function User(username, password) {
    this.username = username;
    this.password = password;
    this.getHelloMessage = function() {
        alert('Welcome ' + this.username)
    }
}

const user = new User('Superadmin', '1234'); // { username:'Superadmin', password:'1234'}
//ใช้ในการ reuser code ได้ง่าย ไม่ต้องเขียนสร้าง Obj หลายๆครั้ง

const user1 = new User('U1','111');
const user2 = new User('U2','222');
const user3 = new User('U3','333');


//ตัวเลข
// e แทนตัวเลขที่มีจำนวน 0 ต่อท้าย
// เช่น 1e3 = 1* 10^3 = 1,000
// ถ้าเลขเป็นเลข จะเป็นเอาไป / แทนการ * (เลขทศนิยมเยอะๆ)
// เช่น 1.23e-8 =  1.23 / 100000000 = 0.0000000123

//เลขฐาน
//เลขฐาน 16 ใส่ 0x นำหน้าตัวเลข
//FF ; F = (15) => F x 16**1 + F x 16**0 => 15 x 16 + 15 x 1 == 255

//การเขียนเลขฐาน 8 ให้ใส่ 0o นำหน้าตัวเลข (o = octar = 8)

//การเขียนเลขฐาน 2 ให้ใส่ 0b นำหน้าตัวเลข (b = bi = 2)

//method num.toString(base) defualt base = 10
//แปลงประเภทเลขฐาน จากตัวเลข เป็นเลขฐานที่กำหนด(base)

//การปัดเศษ (Round)
//ใช้ build-in Object 'Math' ตามด้วย . class build-in ของ JS ตามด้วย (ตัวเลข)

//#1 Math.floor() ปัดลงเสมอ
//#2 Math.ceil() ปัดขึ้นเสมอ
//#3 Math.round() ปัดตามหลักความเป็นจริง
//#4 Math.trunc() ตัดทิ้ง ไม่สนใจเศษ

//#5 Math.toFixed() เลือกว่าจะแสดงทศนิยมกี่ตำแหน่ง โดยปัดเศษแบบ round
//แต่รูปแบบจะเป็นแบบ " ตัวแปรที่ประกาศ.toFixed(จำนวนเลขทศนิยม) " หรือ " Math.toFixed(จำนวนทศนิยม) "

//#6 isFinite() isNaN()
//isNaN(value) เช็คว่า value ที่ใส่ 'ไม่ใช่ตัวเลข'
//isFinite(value) เช็คว่า value ที่ใส่ 'เป็นตัวเลขไหม (ที่ไม่ใช่ infinity) = true'

//#7 parseInt(ข้อความ) parseFloat(ข้อความ) ( เช็คค่าวิ่งจากซ้ายไปจนเจอข้อความ ( หรือจุดตัวที่ 2 )แล้วคืนค่ากลับมา )
//parseInt(ข้อความ) รับข้อความมาเปลี่ยนเป็นค่าเลขจำนวนเต็ม (int)
//parseFloat(ข้อความ) รับข้อความมาเปลี่ยนเป็นค่าเลขจำนวนจริง/เลขทศนิยม 1 จุด (float)

//#8 Math.random() return ค่า float จาก 0 ถึง 1 (ไม่นับ 1)

//#9 Math.max(a, b, c...) / Math.min(a, b, c...) retunr ค่ามากสุด/น้อยสุด จากที่เราส่งไป/กำหนดใน ()

//#10 Math.pow(n, m) retunr ค่า n ^ m ; pow => power

//String
// การแก้ไข ตัวอักษรพิเศษ เช่น I'm ไม่ให้โปรแกรมอ่านค่า
// ใส่\หน้า ตัวอักษรพิเศษที่เราต้องการให้แสดง / ให้โปรแกรมไม่อ่านค่า  'I\'m Pro'
// ใส่ตัวครอบทั้งหมดเป็น single quote หรือ bracket quote แทน  "I'm Pro"
// ใช้ bracket `` ในการพิมพ์ แล้วค่าไหนเป็นตัวแปรให้ใส่ ${…} ครอบได้
// '\n' ทำการขึ้นบรรทัดใหม่
// เช็คความยาวของ srting (นับช่องว่างด้วย)

let str = "Happy New Year"

console.log( str.length ); // 14
console.log( "Hello World".length ); // 11
console.log( `My\n`.length ); // 3

console.log( str[0] ); // H
console.log( str[10] ); // Y
console.log( str.charAt(6) ); // N

// เข้าตัวอักขระข้อความใน string
// #1 []วางไว้หลังข้อความ โดย 0 คือตัวแรกของข้อความ ; ถ้าไม่เจอ = undefined
// #2 .charAt() วางไว้หลังข้อความ
// *ไม่สามารถแก้ไขค่าได้ ต้องแก้ทั้งคำ อ่านค่าได้แต่เขียนไม่ได้ ; ถ้าไม่เจอ = ""
// #3 สามารถใช้ for ... of ในการเข้าถึงอักศรทีละตัวได้

for (let char of "Hello") {
    console.log(char); // H,e,l,l,o 
}


str = "Happy New Year"
console.log(str.toLowerCase()); // happy new year
console.log(str.toUpperCase()); // HAPPY NEW YEAR

// แปลงอักขระ
// .toLowerCase() ใส่ไว้หลังข้อความ แปลงเป็นตัวเล็กทั้งหมด
// .toUpperCase() ใส่ไว้หลังข้อความ แปลงเป็นตัวใหญ่ทั้งหมด

// การค้นหาข้อความ
// ข้อความ.indexOf('ข้อความที่หา', ตำแหน่งเริ่มต้นในการค้นหา) return ตำแหน่งแรกที่เจอคำ ; defualt ตำแหน่งค้นหา = 0
// ไม่เจอจะ return เป็น -1

console.log(str.indexOf('New')) // 6
console.log(str.indexOf('new')) // -1
console.log(str.indexOf('New', 7)) // 6
console.log(str.toLowerCase().indexOf('new')) // 6 สามารถ convert คำก่อนจะค้นหาคำได้

// string method สามารถ chaining method ได้ โดยต้อง return ค่าออกมาแล้วตรงเงื่อนไขการใช้งานของ method ตัวต่อไป
// ข้อความ.lastIndexOf('ข้อความที่หา', ตำแหน่งเริ่มต้นในการค้นหา) หาข้อความสุดท้ายที่เจอ return *โดยส่งตำแหน่งแรกของข้อความ* ; defualt ตำแหน่งค้นหา = 0
// ไม่เจอจะ return เป็น -1

str = 'Widget with id id';
console.log( str.lastIndexOf("id") ); // 15, "id" พบที่ตำแหน่งที่ 15


// การตัดข้อความ

str = "Happy New Year"
const sliced = str.slice(0,5)  // ตัดตั้งแต่ 0 ถึง ตำแหน่ง 5 แต่ไม่เอาตัวที่ 5 ; ไม่แก้ไขข้อความเดิม
console.log(sliced)
console.log(str)

str = "Happy New Year"
const sliced_black = str.slice(-8,-5)  // New
console.log(sliced_black)

// #1ข้อความ.slice(start [, end])
// ตัดข้อความจากตำแหน่ง start => end แต่เอาไม่ตำแหน่ง end เอาที่ end-1 ; ไม่กำหนด end เอาึถึงตัวสุดท้าย
// สามารถใช้แบบ -int ได้ หลังสุดคือ -1 ไล่จากขวาไปซ้าย

substringed = str.substring(5 , 0) 
substringed1 = str.substring(0 , 5) 
console.log(substringed)
console.log(substringed1)

// #2ข้อความ.substring(start [, end]) 
// substring จะทำการสลับเลขก่อนตัด เรียงเลขน้อย => เลขมาก ไม่สามารถทำกลับหลังได้ ; -int ไม่ได้

substr = str.substr(2 , 2) // pp
console.log(substr) 

// #3ข้อความ.substr(start [, length]) 
// เริ่มต้นที่ตำแหน่งที่เท่าไร แล้วนำมากี่ตัว  


// การเปรียบเทียบข้อความ พิมพ์เล็ก > พิมพ์ใหญ่ เสมอ ค่าของตัวอักษรจะตาม Unicode ; เล็ก ใหญ่ ค่าไม่เท่ากัน

testText = 'Widget with id';
console.log(testText.includes('with'));
console.log(testText.includes('By'));
console.log(testText.startsWith('W'));
console.log(testText.startsWith('w'));
console.log(testText.endsWith('id'));
console.log(testText.endsWith('i'));

// includes เช็คว่ามีค่านั้นใน string หรือไหม return เป็น boolean
// ข้อความ.includes( ข้อความที่หา [, ตำแหน่งที่เริ่มค้นหา ] )
// startsWith เช็คว่าใน string 'เริ่ม' ด้วยค่านั้นหรือไหม return เป็น boolean
// endsWith เช็คว่าใน string 'จบ' ด้วยค่านั้นหรือไหม return เป็น boolean
// ข้อความ.starts/endswith( ข้อความที่หา )


let str = '  Wissanu'
str = str.trim(); // ลบช่องว่าง

str = 'What I\'d like to tell on this topic is:';
arr = str.split(' '); // split str 1 ช่องว่าง => ตัดข้อความทุกช่วงช่องว่าง มาทำเป็น Object 
console.log(arr); 

str = 'Hello';
arr = str.split(''); // split str 1 ช่องว่าง => ตัดข้อความทุกตัวอักษร มาทำเป็น Object 
console.log(arr);


//Array ไว้เก็บชุดข้อมูลเหมือน Object แต่ มีการเรียงลำดับของข้อมูลให้
//ประกาศ Array ตามด้านล่าง มี 2 วิธี
// arr = new Array();
// arr = [];

students = new Array();
students = ['Note','Beer', [1,2,8, {firstName: 'Tle'}]];

//Array อยู่ใน Object ได้
product = {
    name: 'Coke',
    saleHistory: [
        {
            date: '20-01-2021',
            amount: 2,
            unitPrice:15
        },
        {
            date: '20-01-2021',
            amount: 10,
            unitPrice:14
        }
    ]
}

//วิธีเรียกข้อมูลใน array

students = ['Note','Beer', [1,2,8, {firstName: 'Tle'}]];

//อ้างถึงข้อมูลใน array = index (ตำแหน่งของข้อมูล) แบบตัวอักษรเริ่มต้นจาก 0

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//การแก้ไขค่า array คล้ายๆ Obj ใช้ตัวชื่อarray[ตัวที่ต้องการอ้างถึง]  = ข้อมูลใหม่

students[2] = 'Snap';
console.log(students[2]);

//การเพิ่มค่าให้ array

console.log(students[3]);
students[3] = 'Ham';
console.log(students[3]);

// students[100] = 'Sun'; //การเพิ่มข้อมูล array ที่ผิด
// console.log(students.length); //length ระบุตำแหน่งสุดท้ายของข้อมูล มันเลยแจ้งว่า array มีความยาว 101 (ตำแหน่งตัวสุดท้าย + 1)

students[students.length] = 'Sun'; //การเพิ่มข้อมูล array ที่ถูกต้อง โดยจะเพิ่มในตำแหน่งสุดท้ายของ array
console.log(students.length);

//ปกติ array จะไม่พยายาม ลบ หรือ เพิ่ม ข้อมูลข้างในมัน
//การเก็บ Fucntion ไว้ใน Array และการเรียกใช้งาน

const auxArr = [function() {console.log('Hello Array')}];
auxArr[0]()

//ลบข้อมูลใน Array จะกลายเป็น empty ลำดับข้อมูลไม่เปลี่ยน

students = ['Note','Beer','Snap','Ham','Sun'];
delete students[2];
console.log(students);
console.log(students[2]);


//การใช้ Method ของ Array 
//#1 push (เพิ่ม)
students = ['Note','Beer','Snap','Ham','Sun'];
// students.push('Leo'); // เพิ่ม Leo เข้าไป ในตำแหน่ง index สุดท้าย => ทำให้มี Leo เป็นลำดับสุดท้ายของ Array students แล้ว
// console.log(students.push('Leo')); // push return ค่าเป็น length
console.log(students.push('Leo','Palm')); //สามารเพิ่มหลายๆค่าได้
console.log(students);

//#2 pop (ลบ)
console.log(students.pop()); // ตัด Array index สุดท้ายออก ; pop return ค่าที่ตัดออก
console.log(students);

//#3 unshift (เพิ่ม)
console.log(students.unshift('Micky','Game')); //แทรกหน้าสุดของ Array ตำแหน่งที่ index [0] ; จะตัวเดียวหรือหลายตัวก็ได้ ; return เป็น lenght
console.log(students);

//#4 shift (ลบ)
console.log(students.shift()); // เอาข้อมูล Array ในตำแหน่ง index [0] ออก ; return ค่าที่ตัดออก
console.log(students);

//เพิ่มข้อมูลใน Array return = lenght
//ลบข้อมูลใน Array return = ตัวที่ลบออก
//การ ใหม่ = เก่า ; เปลี่ยน ใหม่ เก่า จะทำให้ค่าเปลี่ยนด้วย (กฎแบบเดียวกับ Obj) (Copy by refference)
// newStudents = students;
// newStudents.push('Micky');
// console.log(students);

//การ clone Array โดยเปลี่ยนข้อมูลในตัวใหม่แล้วตัวเก่าไม่เปลี่ยน
// newStudents = [...students];

//อย่าใช้ Object กับ Array ปนกัน

//อย่ากำหนด length ให้ Array => ทำให้ข้อมูล index หลังจากที่ระบุใน length โดนตัดทิ้งไปทั้งหมด
// students.length = 2;
// console.log(students);  

//push/pop เร็วกว่า shift/unshift 
//เพราะกลุ่มแรกไปดูตำแหน่งสุดท้ายเลย แต่กลุ่มหลังต้องไปปดูตำแหน่งแรกแล้วต้องจัดเรียงindexทั้งหมดใหม่

//for...loop กับ Array
//แบบทั่วไป ; ใช้งานตำแหน่ง Index ได้ ; ข้อมูลเยอะ แต่ดูง่ายที่สุด
for ( i = 0 ; i < students.length ; i++ ) {
    console.log(i + '. ' + students[i]);
}

//แบบ for...of ; แทนค่า index ของ array ในแต่ละรอบ ; สั้นกว่า แต่ไม่รู้ตำแหน่ง Index ต้องประกาศแยก
//แบบบนจะรู้ตำแหน่ง index ถ้าต้องใช้งาน ไม่ต้องไปประกาศแยก
i = 0
for (stu of students) {
    console.log(i + '. ' + stu);
    i++;
}

//แบบ build-in forEach ; ใช้เป็น callback function ; รับ parameter ได้ 3 ตัว
// arr_name.forEach(function(name, index, arr) { // ต่า parameter ของ funtion คือ ค่าของindexนั้น ตำแหน่งของindex ค่าทั้งหมดในArray
//     console.log(name);
//     console.log(index);
//     console.log(arr);
// });


//สมมติ Array ["Game", "Note", "Beer", "Snap", "Ham", "Sun", "Leo"]
students.forEach(function(stu ,index ,arr) {
    console.log(stu);
});

//เรียกฟังชันทำงาน รอบแรก ส่ง index[0] = 'Game' ไปเก็บไว้ที่ stu => ทำให้ stu = 'Game'
//รอบ 1 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Game' console.log เลยแสดงค่า 'Game'
//รอบ 2 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Note' console.log เลยแสดงค่า 'Note'
//รอบ 3 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Beer' console.log เลยแสดงค่า 'Beer'
//รอบ 4 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Snap' console.log เลยแสดงค่า 'Snap'
//รอบ 5 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Ham' console.log เลยแสดงค่า 'Ham'
//รอบ 6 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Sun' console.log เลยแสดงค่า 'Sun'
//รอบ 7 เรียกใช้งาน function(stu) แล้วไปทำงานในตัว function body => console.log(stu) ; โดย stu = 'Leo' console.log เลยแสดงค่า 'Leo'

//แบบ build-in forEach => แปลงเป็น Arrow
students.forEach(stu => console.log(stu));


// การสร้าง array 2 แบบด้านล่าง มีค่าเท่ากัน
arr = new Array("Apple", "Pear", "etc");
arr = ["Apple", "Pear", "etc"];

arr = new Array(2) // Array length = 2

// การสร้าง Array แบบ Matrix และการเรียกค่า name[index.row][index.column]
arr = [
    [1 , 2, 3],
    [4 , 5, 6],
    [7 , 8, 9]
];
console.log(arr[0][0]); // 1
console.log(arr[0][2]); // 3
console.log(arr[1][1]); // 5


// value.trim() == '' ไว้เช็คว่าไม่ใช่ string ว่างที่ space bar เยอะๆใข่ไหม
// newValue = prompt('Enter Number');
// if (isNaN(Number(newValue)) || newValue != 0 || newValue.trim() == '' ) break; 

//splice ลบ Item ตำแหน่ง Index ที่ไม่ชอบ ; แทรกค่าเข้าไปในตำแหน่งหน้า index ที่ระบุ 
// ARRAY . splice ( ตำแหน่ง Index X , ตัด Y ตัว , แทรกค่าอะไรตรงที่ตัด  / หน้า Index X )

numbers = [2,3,5,7,11,13]; // อยากลบ numbers[5]
numbers.splice(2, 1, 9); // index ที่ 2 ; ตัด 1 ตัว (5) ; แล้วใส่ 9 ; แทน
console.log(numbers);

numbers = [2,3,5,7,11,13]; // อยากลบ numbers[5]
numbers.splice(2, 2, 9); // index ที่ 2 ; ตัด 2 ตัว (5,7) ; แล้วใส่ 9 ; แทน
console.log(numbers);

numbers = [2,3,5,7,11,13];
console.log(numbers.splice(2, 2, 9)); // console.log splice return ค่าที่ตัดออก
console.log(numbers);

numbers = [2,3,5,7,11,13];
numbers.splice(3, 0, 9); // แทรกค่า 9 เข้าไปที่ หน้า index ที่ 3 (7)
console.log(numbers);

numbers = [2,3,5,7,11,13];
numbers.splice(0, 0, 9); // แทรกค่า 9 เข้าไปที่ หน้า index ที่ 0 (2)
console.log(numbers);

numbers = [2,3,5,7,11,13];
numbers.splice(-1, 0, 9); // แทรกค่า 9 เข้าไปที่ หน้า index ที่ -1 (13) ; อยากแทรกหลังสุด ใช้ .push()
console.log(numbers);

//slice ตัด ARRAY
//return ค่าออกมาจาก ARRAY เป็น ARRAY โดยไม่มีการ modeifier ARRAY ตัวนั้น
//ใช้ Index -int (กลับหลัง) ได้ = การนับตำแหน่ง Index มาจากข้างหลัง แต่ตัดซ้ายไปขวาเหมือนเดิม

numbers = [2,3,5,7,11,13];
console.log(numbers.slice(2,4)); // retunr [5,7]
console.log(numbers);

arr = ["t", "e", "s", "t"];
console.log(arr.slice(1,3)); // [e ,s]
console.log(arr.slice(1)); // [e ,s ,t]
console.log(arr.slice(-2)); // [s ,t]
console.log(arr.slice(-2,-1)); // [s]

//concat การเอา ARRAY มาต่อ ARRAY

names1 = ['sun','boss'];
names2 = ['note','beer'];
names3 = ['leo','palm','micky'];

console.log(names1.concat(names2)); // ["sun", "boss", "note", "beer"]
console.log(names1); // ["sun", "boss"] // ต่อกันแล้ว ค่า ARRAY หลัก ไม่เปลี่ยนแปลง
console.log(names1.concat(names2,names3)); // ["sun", "boss", "note", "beer", "leo", "palm", "micky"]

// space operator
// ต้องมี ... ไม่มีจะเอาทั้งก้อนมาต่อแทน 
console.log([...names1, ...names2, ...names3]) // ["sun", "boss", "note", "beer", "leo", "palm", "micky"] 
console.log([...names1, ...names2, names3]) // ["sun", "boss", "note", "beer", Array(3)] 


//find และ findIndex
//find เป็น callback function

namesBig = ["sun", "boss", "note", "beer", "leo", "palm", "boss", "micky"] ;

result = namesBig.find((value, index, arr) => value === 'boss'); //แบบสั้นๆ
console.log(result); // 'note' ; ไม่เจอ = undefined

//หลักการทำงาน คล้ายๆ for each ค่อยๆแทนค่าจาก Array หลักไปเรื่อยๆ
//เขียนแบบ forEach ได้ (เขียนเถอะ ดูง่ายกว่า)

result = namesBig.find((value, index, arr) => {value === 'boss'}); // กฎ Arrow Function ถ้ามี { } ต้องมีการใส่ค่า return ไม่งั้นจะไม่คืนค่ากลับมา
console.log(result) // undefined
result = namesBig.find((value, index, arr) => {
    return value === 'boss'
});
console.log(result); // boss

//findIndex 
//ถ้าหาค่าเจอจะ return index ออกมา ; ไม่เจอ -1
//return ค่า index แรกที่หาเจอเท่านั้น

result = namesBig.findIndex(function(value, index, arr) {
    return value === 'boss'
});
console.log(result); // 1


//find และ findIndex แบบ Advance

users = [
    { id:1, name:'John'},
    { id:2, name:'Pete'},
    { id:3, name:'Mary'}
];

name1 = users.find(function(item,index,arr) {
    return item.name === 'Pete'; //หาค่า Pete ใน Obj ชื่อ Name ; ถ้าค่า name (เลือก obj name) มีค่า = 'Pete' return item.name นั้น?
});
console.log(name1) // {id: 2, name: "Pete"}

name1 = users.find(function(item,index,arr) {
    return item.name.toLowerCase() === 'pete'; //หาค่า Pete ใน Obj ชื่อ Name?
});
console.log(name1) // {id: 2, name: "Pete"}

users = [
    { id:1, name:'John', address: {province:'Bangkok', district:'Pathumwan'} },
    { id:2, name:'Pete', address: {province:'Loei', district:'Chaing Kan'} },
    { id:3, name:'Mary', address: {province:'Trat', district:'Koh Chang'} },
];

name1 = users.find(function(item,index,arr) {
    return item.address.district === 'Pathumwan'; //หาค่า Koh Chang จาก Obj > ใน district > ใน address แล้ว returun ค่า Obj นั้นออกมา?
});
console.log(name1) // {id: 3, name: "Mary", address: {…}}

//หาตำแหน่งของค่าที่ต้องการ ด้วย findIndex แล้วแก้ค่านั้น

indexToEdit = users.findIndex(function(item ,index ,arr) {
    return item.name === 'Peter';
} );

console.log(indexToEdit);

if (indexToEdit !== -1) { // ใส่ป้องกัน indexToEdit แล้วหาไม่เจอ (ค่าเป็น -1 == undefined) จะแก้ไขค่าไม่ได้ 
    users[indexToEdit].name = 'Tim';
}

console.log(users);


//filter เป็น callback function เหมือน find findIndex
//เป็น find ที่ดีกว่า
//retunr ค่า ออกมาเป็น ARRAY เริ่มตั้งแต่ index ที่ตรงเงื่อนไขไปต่อได้ เอาจนหมดค่า
//find เจอค่าที่ตรงเงื่อนไขแล้ว หยุดเลย

numbers = [2,3,5,7,11,13];

greaterThanSixFind = numbers.find(function(item,index,arr) {
    return item > 6; // return 7 
});
console.log(greaterThanSixFind)

greaterThanSixFilter = numbers.filter(function(item,index,arr) {
    return item > 6; // return [7,11,13]
});
console.log(greaterThanSixFilter)

users = [
    { id:1, name:'John', address: {province:'Bangkok', district:'Pathumwan'} },
    { id:2, name:'Pete', address: {province:'Loei', district:'Chaing Kan'} },
    { id:3, name:'Mary', address: {province:'Trat', district:'Koh Chang'} },
    { id:4, name:'Jim', address: {province:'Bangkok', district:'Ladpao'} },
];

usersInBangkok = users.filter(function(item,index,value) {
    return item.address.province === 'Bangkok';
});
console.log(usersInBangkok)


//map เป็น callback function
//return เป็น ARRAY 
//modifire ค่า ARRAY ในแต่ละ element ได้
//ใช้แปลง string เป็น number ความยาวของ string ได้

numbers = [2,3,5,7,11,13];
numberPowerTwo = numbers.map(function(item,index,arr) {
    return item ** 2;
});
console.log(numberPowerTwo); // [4, 9, 25, 49, 121, 169]


//sort function ไว้เรียงลำดับข้อมูล
//เป็นการเรียงแบบ string (คล้ายแบบตอน excel เรียงไฟล์ตอนทำ hyperlink file ในคอม ที่ )

numbers = [7 ,3 ,19 ,2 ,11 ,13 ,5 ];
console.log(numbers); // [7, 3, 19, 2, 11, 13, 5]

// numbers.sort(); // สั่ง sort ครั้งแรก จะเรียงแบบ string ทำให้ ไม่ใช่เรียงแบบ Number ที่เราต้องการ ต้อง run function เพิ่ม
// console.log(numbers); // [11, 13, 19, 2, 3, 5, 7] 
// //function sort number จาก น้อย ไปหา มาก
// numbers.sort((a,b) => { // callback funtion แบบสั้นๆ(เก่า)
//     if ( a < b ) return -1;
//     if ( a === b ) return 0;
//     if ( a > b ) return 1;
// })
// console.log(numbers); // [2, 3, 5, 7, 11, 13, 19]

// numbers.sort(function(a,b) { // callback funtion แบบเต็ม
//     if ( a < b ) {
//         return -1;
//     }
//     if ( a === b ) {
//         return 0;
//     }
//     if ( a > b ) {
//         return 1;
//     }
// })
// console.log(numbers); // [2, 3, 5, 7, 11, 13, 19]

// numbers.sort((a,b) => { // callback funtion แบบสั้นๆ(ใหม่)
//     return a-b
// })
// console.log(numbers); // [2, 3, 5, 7, 11, 13, 19]

//อยากได้เรียง น้อย ไป มาก = a-b ; มาก ไป น้อย = b-a

//แบบสั้นที่สุด
numbers.sort((a,b) => a-b);
console.log(numbers);

numbers.sort((a,b) => b-a);
console.log(numbers);


//reverse ทำงานเหมือน sort แต่กลับด้านกัน

numbers.reverse();
console.log(numbers);

//split และ join
//split ใช้กับ string
//split แปลง string > ARRAY

str = 'Hello world';
splitted = str.split(' ');
console.log(splitted);

//join
//join แล้ว กลายเป็นก้อน string แล้ว 
//join แปลง ARRAY > string

queryString = ['id=1', 'name=John', 'orderBy=name', 'limit=25'];
console.log(queryString);
//อยากได้ newQs = id=1&&name=John&&orderBy=name&&limit=25

qs = queryString.join(' ');
console.log(qs); // main.js:2038 id=1 name=John orderBy=name limit=25

qs = queryString.join('&&');
console.log(qs); // id=1&&name=John&&orderBy=name&&limit=25


//เช็คว่า เป็น ARRAY ไหม

numbers = [-1, 4,-3, 17, 7, -2];
str1 = 'Hello';

console.log(typeof(numbers)); // Object
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(str1)); // false
console.log(Array.from(str1)); // แปลงให้เป็น Array

sum = 0;

for ( i = 0 ; i < numbers.length ; i++ ) {
    sum = sum + numbers[i] ** 2;
    // sum += numbers[i] ** 2;
}
console.log(sum)


//.reduce function
//ทำการ iteration ตัว call back function โดยมีการส่ง previous Value เข้าไป ใน iteration#1 previous Value= initial value
//return อะไรออกไป = เอาค่านั้นไปใช้ใน #Iter ต่อไป (ในตัวอย่าง return previousValue)

numbers = [-1, 4,-3, 17, 7, -2];

//function reduce แบบ แยกฟังชันออกมาให้ดูง่ายๆ(?)
function cb(previousValue, item, index, arr) {
    return previousValue + item **2
}

sumReduce = numbers.reduce(cb, 0); // cb = call back function ; 0 = ค่า initial value
console.log(sumReduce)

//#Iter1 call cb(0, -1, 0, [-1, 4,-3, 17, 7, -2]); return 1 ( => previousValue #Iter2 )
//#Iter2 call cb(1, 4, 1, [-1, 4,-3, 17, 7, -2]); return 17 ( => previousValue #Iter3 )
//#Iter3 call cb(17, -3, 2, [-1, 4,-3, 17, 7, -2]); return 26 ( => previousValue #Iter4 )
//...
//#Iter3 last call  cb(364, -2, 5, [-1, 4,-3, 17, 7, -2]); return 368 ( => previousValue #Iter4 )


// numbers.reduce(function(previousValue, item, index, arr) {

// }, null); // null = ค่าเริ่มต้น
// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])


//Conditional (ternary) ของ if
// username = prompt('Enter username');
// role = username === null || username === '' ? 'Guest' : 'User'
// condition ? exprIfTrue : exprIfFalse

//... การ CLONE ARRAY
//newArr = [...oldArr]

//อธิบาย reduce ฟังก์ชัน

numbers = [-1,4,-3,17,7,-2];

sum = numbers.reduce(function(acc, item) {
    result = acc + item;
    return result
}, 0);

console.log(numbers)
console.log(sum)

//  round     previousAccmulator      currentValue        nextAccmulator
//  1               0                       -1                 -1
//  2               -1                       4                  3
//  3               3                       -3                  0
//  4               0                       17                  17
//  5               17                       7                  24
//  6               24                       2                  22       


//recap เรื่อง ARRAY

// arr = ['Tle','Jit'];
// arr[0] = 'Ham';

// delete arr[0]; // ลบตำแหน่งที่ index 0 => empty == undefined

//length ARRAY == index สุดท้าย + 1 

//push , pop , unshift , shift
//push 
// arr.push('Sun'); // เพิ่มค่าไปต่อท้ายสุด เพิ่มมากว่า 1 ค่าได้ ; return เป็น length (index สุดท้าย + 1)
// console.log(arr.push('Sun'))
//pop
// arr.pop() // เอาตัวสุดท้ายออก => return ค่าที่เอาออก
//unshift
// arr.unshift() // เพิ่มไปที่ตำแหน่งตัวแรก (index 0) แล้วผลักของเดิมออกไป => return เป็น length
//shift
// arr.shift // เอาตัวแรกออก => return ค่าที่เอาออก

//Array.isArray(arr); check ว่าเป็น Array ไหม

//for...loop ARRAY

//for ( i = 0 ; i <arr.length) { // ละเอียด แต่รก
//  i is index
//  item is arr[i]
//}

//let i = 0; // ไม่มี i ต้องระบุแยก
//for ( item of arr ) {
//  i++
//}

//arr.forEach(function(itiem , index , arrray) { // run callback function แทน item ทุกตัวใน Array
//  arr.includes('XXX);
//})

//splice , slice //เอาค่าตรงกลางออก

// number = [4 ,6 ,8 ,3];
// number.splice(2 , 1); // เอา 8 ออก return เป็น ARRAY
// number.splice(3 , 0, 7, 9); // ตำแหน่ง Index = 3 เอาออก 0 เพิ่ม 7 , 9
// number.splice(1 , 2, 7, 9, 5); // ตำแหน่ง Index = 1 เอาออก 2 เพิ่ม 7 , 9, 5
// ตัว ARRAY โดน modifier ด้วย

// number = [4 ,6 ,8 ,3];
// newNum = number.slice() //ไม่ใส่อะไรเลย return ค่าตัวมันเอง ; เป็นการโคลนจากตัวแรก return เป็น ARRAY
// newNum = number.slice(1) // 4 ; newNum = [4] ; number = [4 ,6 ,8 ,3];
// ตัว ARRAY แรกไม่มีการเปลี่ยนแปลง ตัวใหม่ != ตัวเก่า => คล้ายๆการ clone ออกมา
// newNum = number.slice(1, 3) // เพราะตัดจาก 1 ถึง 3 ไม่รวม 3 (ตัดจากตัวเริ่ม จนถึงหลังสุด แต่ไม่เอาตัวหลังสุด)
// number === (newNum = number.slice()) มีค่าไม่เท่ากัน (อ้างอิงคนละตำแหน่งกัน)

// // splice , slice index ระบุ index ติดลบได้
// newNum = number.slice(-2) // [4 ,6 ,8]
// newNum = number.slice(-2, 1, 9, 11) // [4 ,6 ,9 ,11 ,3]
// newNum = number.slice(-3) // [ 6, 8, 7]

//concat การต่อ ARRAY

// number1 = [6, 9, 4]
// number2 = [5, 8, 6]
// //อยากได้ [6, 9, 4, 5, 8, 6]

// combined = number1.concat(number2); //สามารถ concat มากกว่า 1 ARRAY ได้ arr1.concat(arr2, arr3)
// console.log(combined)
// console.log(number1)

// // ต่อกันโดยคง ARRAY เก่าไว้เหมือเดิม ; clone เป็นตัวใหม่
// //การ clone ARRAY อีกแบบ
// clone = [...number1, ...number2, ...number3];

// indexOf lastIndexOf , includes การค้นหาใน ARRAY#1
// arr.indexOf('คำที่หา'[, (ตำแหน่งที่เริ่ม)]) // หาจากหน้าไปหลัง ; เจอ return index ตัวแรกที่เจอทันที ไม่วิ่งไปหาตัวต่อไป ; ไม่เจอ return -1
// arr.lastIndexOf('คำที่หา'[, (ตำแหน่งที่เริ่ม)]) // เหมือน indexOf แต่หาจากข้างหลังมาข้างหน้าแทน ; เจอ return index ตัวแรกที่เจอทันที ไม่วิ่งไปหาตัวต่อไป ; ไม่เจอ return -1
// arr.includes('คำที่หา'[, (ตำแหน่งที่เริ่ม)]) // return ค่าเป็น boolean

// find findIndex filter การค้นหาใน ARRAY#2
// arr.find( item [, index , arr ] => { 
//      return item === 'Honda';
//  })
// () เป็น Callback function ; ถ้าใน Callback function จริง return ค่าใน arr ที่ทำให้เป็น true ออกไป ; fales return undefined 

// arr.findIndex( item [, index , arr ] => { 
//      return item === 'Honda';
//  })
// () เป็น Callback function ; ถ้าเจอ return ค่า Index ที่ทำให้ body ของ callback funtion เป็นจริง = 1 ; ไม่เจอ return -1

// arr.filter( item [, index , arr ] => { 
//      return item === 'Honda';
//  })
// () เป็น Callback function ; หาทั้งหมดแล้ว return ทุกตัวเป็น ARRAY

// // map
// persons = [
//     {
//         name:'Tle',
//         weight:20,
//         height:155
//     },
//     {
//         name:'Ham',
//         weight:65,
//         height:175
//     }
// ]

// heightInMeters = person.map(item => {
//     return item.height / 100;
// }) // [1.55, 1.75]

// bmi = person.map(item => item.weight / ((item.height/100)**2));

// //sort
// number = [29, 14, 7, 65, 38, 2, 99, 100];

// number.sort(); //เรียงข้อมูลตามหลัก Unicode ทำให้เรียงตัวเลขแปลกๆ
// number.sort((a, b) => a - b ); //ต้องใช้แบบนี้ ถ้าต้องการเรียงตัวเลขจาก น้อยไปมาก
// number.sort((a, b) => b - a ); //ต้องใช้แบบนี้ ถ้าต้องการเรียงตัวเลขจาก มากไปน้อย

// number = [-5, 3, 8, -7, 0, -1];
// number.sort((a, b) => a**2 - b**2 ); // อยากได้ผลลัพธ์ เรียงกัน จากการยกกำลัง 2 

// students = [
//     {
//         name:'Tle',
//         money: 120
//     },
//     {
//         name:'Jit',
//         money: 50
//     },
//     {
//         name:'Beer',
//         money: 125
//     },
//     {
//         name:'Snap',
//         money: 90
//     }
// ]

// b = students.sort((a,b)=> b.money - a.money )
// console.log(b)

// //reverse สลับการเรียง
// numbers = [29, 14, 7, 65, 38, 2, 99, 100];
// numbers.reverse()
// console.log(numbers)

// //split,join
// str =  '1,000,134';
// console.log(str);
// console.log(+str); // NaN
// splitStr = str.split(',');
// console.log(splitStr);
// joinStr = splitStr.join('');
// console.log(joinStr);
// console.log(+joinStr); // Number

//reduce

// numbers = [1, 5, 9, 13, 17, 2, 7];

// sum = 0
// number.forEach(item => {
//     sum += item;
// })

// sum = numbers.reduce(callbackFn, initialValue) // initialValue = ค่าเริ่มต้น

// accTotalSale = 15400;
// sales = [120, 700, 900, 450, 1800];

// sum = sales.reduce((accumulator, item) => {
//     return accumulator + item;
// }, accTotalSale)

// console.log(sum)

// ids = [1, 2, 3, 1, 4, 3];
// person = [
//     {
//         id:1,
//         name:'Cin'
//     },
//     {
//         id:2,
//         name:'Sine'
//     },
//     {
//         id:3,
//         name:'Beer'
//     },
//     {
//         id:4,
//         name:'Note'
//     },
// ]

// perId = person.reduce((acc, item) => {
//     acc[item.id] = item.name
//     return acc 
// }, {}) 

// console.log(perId)

// result =  ids.map(item => {
//     return perId[item]
// })
// console.log(result)


// mapped1= {
//     1:'Cin',
//     2:'Sine',
//     3:'Beer',
//     4:'Note'
// }

// result1 = ids.map(item => mapped1[item])
// console.log(result1)


// mapped2 = person.reduce((acc, item) => {
//     if (!acc[item.id]) acc[item.id] = item.name
//     return acc;
// }, {})

// console.log(mapped2)

// result2 = ids.map(item => mapped2[item])
// console.log(result2)


// Iterable คือ สามารถเข้าถึงรายตัวได้ => ใช้ for...of ได้

str = 'Codecamp';

for (a of str) {
    console.log(a)
}

// String Array ใช้ได้ 
// Object ใช้ไม่ได้


// MAP & SET
// MAP เหมือนกับ OBJECT ต่างกันแค่ KEY ของ MAP เป็นอะไรก็ได้ ( ของ OBJECT บังคับต้องเป็น STRING )

// new Map() – สร้าง Map ขึ้นมาใหม่
// map.set(key, value) – เก็บ key และ value ลง Map
// map.get(key) – คืนค่า value ของ key ใน Map, undefined ถ้า key นั้นไม่มีอยู่ใน Map
// map.has(key) – เป็น true ถ้า Map นั้นมี key
// map.delete(key) – ลบ value ที่มี key ออกจาก Map
// map.clear() – ลบทุกอย่างออกจาก Map
// map.size – คืนค่าเป็นขนาดของ Map

map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// console.log(map.get('1')) // 'str1'
// console.log(map.get(1)) // 'num1'
// console.log(map.get(true)) // 'bool1'

// console.log(map.size) 

map.set('1','string1')
// console.log(map.get('1')) // 'string1'

john = {name: "John"}; //OBJ john
johny = {name: "Johny"};
// console.log(john === johny);

map.set(john, 'I am John'); // add OBJ john เป็น KEY ของ MAP

// console.log(map.get(john)); // เรียกค่า VALUE ของ KEY john ใน MAP
// console.log(map.get(johny));

// MAP สามารทำให้ KEY ของ MAP เป็น OBJECT ได้

//Iteration ของ MAP (สำหรับ loop ต่างๆ เช่น for...of)

// map.keys() – คืนค่า keys ที่ Iterable
// map.values() – คืนค่า values ที่ Iterable,
// map.entries() – คืนค่า entries ที่ Iterable [key, value] ไม่กำหนด คืนทั้ง KEY , VALUE เป็น ARRAY 2 ตำแหน่ง


for (key of map.keys()) {
    // console.log(key);
    // console.log(typeof key);
}

map.set(john, ['I','am','John']); 


for (value of map.values()) {
    // console.log(value);
    // console.log(typeof value);
}


for (ent of map.entries()) {
    // console.log(ent);
    // console.log(typeof ent);
    // console.log(ent[0]);
    // console.log(ent[1]);
}

// index1 =KEY ; index2 = VALUE ;


// map ใช้ forEach ได้
map.forEach(function(value, key, mapSelf) {
    console.log(`key is ${key}, value is ${value}`)
    console.log(map)
    return
});


//แปลง OBJECT เป็น ARRAY key-value ได้
//ส่งค่าลงไปใน Contructor ของ MAP ( new Map([]) )

newMap = [
    ['1' , 'string1'],
    [1 , 'number1'],
    [true, 'boolean']
]

map = new Map(newMap)

console.log(map)

//แปลง ARRAY ของ key-value เป็น OBJECT ได้เช่นกัน
//ใช้ Object.entries ; OBJ => ARR
//ใช้ Object.fromEntries ; ARR => OBJ

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

console.log(prices.banana)


//SET เป็น Collection ชนิดนึง เก็บเฉพาะ VALUE ไม่มี KEY
//เก็บค่าที่ไม่ซ้ำเท่านั้น

// set = new Set();
// set.add('Tle');
// set.add('Note');
// console.log(set.size);

// set.add('Tle');
// console.log(set.size);
// console.log(set);

// set.delete('Tle');
// console.log(set.size);
// console.log(set);

// set.clear();
// console.log(set.size);
// console.log(set);
// console.log(set.has('Tle));

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add({name:'john'});
set.add(john);
set.add(mary);

console.log(set.size);
console.log(set);

//for...of กับ forEach มีค่าเท่ากัน

// for ( data of set) {
//     console.log(data)
// }

set = new Set(["oranges", "apples", "bananas"]);

set.forEach((value, sameValue, selfSet) => {
    console.log(value)
});

set.keys()    – คืนค่าเป็น an iterable object สำหรับ values
set.values()  – เหมือนกัน set.keys(), มีไว้สำหรับใช้กับ with Map
set.entries() – returns an iterable object สำหรับ entries [value, value], มีไว้สำหรับใช้กับ with Map


//Array.from() แปลง Iterable เป็น ARR

//// แบบฝึกหัด03 - สอนการใช้ Array.from และ Object.keys/values/entries
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more");



// conArr = Array.from(keys);
// conArr.push('more')
// console.log(conArr)


let vals = map.values();
let ent = map.entries();

conArr = Array.from(keys);
conValsArr = Array.from(vals);
conEnt = Array.from(ent);
console.log(conEnt) // [['name','John']]

// result = [...conArr, ...conValsArr];
// result.push('more')
// console.log(result)

// conArr.push('more')
// console.log(conArr)


// การ Flatten ARRAY (ต่อ ARRAY เป็นบรรทัดเดียวกัน)
arr1 = [
    [1 , 2],
    [3 , 4],
    [5 , 6]
] // 1, 2, 3, 4, 5, 6
//หลักการ ต้องใช้ for...loop อะไรก็ได้ => reduce ดีสุด

res1 = arr1.reduce(function(acc, item) {
    return [...acc, ...item]
}, []);

console.log(res1);

//Keys, Values และ Entities

person = {
    firstName : 'Wissanu',
    lastName : 'KnogJunD',
    age : 27
}

keys = Object.keys(person); // ["firstName", "lastName", "age"]
console.log(keys);
vals = Object.values(person);
console.log(vals);
ents = Object.entries(person);
console.log(ents);

// for (k of keys) {
//     console.log(`${k} : ${person[k]}`)
// } //firstName : Wissanu

// for (val of ents) {
//     console.log(`${val[0]} : ${val[1]}`)
// } //firstName : Wissanu

val = [ , ] // [key, value]
for ([key , value] of ents) {   
    console.log(`${key} : ${value}`)
} //firstName : Wissanu


*/

//ประกาศ Date()

now = new Date();
console.log(now);
// `YYYY-MM-DDTHH:mm:ss.sssZ`
// + - timezone ให้อัตโนมัติ
dataString = new Date();
dataString = new Date(`2021-02-18T03:24:23.000Z`);
console.log(dataString);
dataString = new Date(`2021-02`);
console.log(dataString);
dataString = new Date(`2021`);
console.log(dataString);

//เช็คว่า format Date string => แปลงเป็น time แบบที่ถูกต้องได้

dateParam = new Date(2021,1 ,18);
console.log(dateParam);

dateParam = new Date(161358120000);
console.log(dateParam);

dateParam = new Date(2021,1 ,18, 1, 30, 35);
console.log(dateParam);

//getFullYear
dateNum  = new Date(2021,1 ,18, 1, 30, 35);
console.log(dateNum.getFullYear());
//getMonth
dateNum  = new Date(2021,1 ,18, 1, 30, 35);
console.log(dateNum.getMonth());
//getDate
dateNum  = new Date(2021,1 ,18, 1, 30, 35);
console.log(dateNum.getDate());
//getHour
console.log(dateNum.getHours());
console.log(dateNum.getUTCHours());
//getMinutes
console.log(dateNum.getMinutes());
//getSeconds
console.log(dateNum.getSeconds());

//getDay
console.log(dateNum.getDay());

//getTime
console.log(dateNum.getTime());

dateNum.setFullYear(2019)
console.log(dateNum);
dateNum.setMonth(dateNum.getMonth()+2)
console.log(dateNum);
dateNum.setDate(dateNum.getDate()+12)
console.log(dateNum);
dateNum.setDate(dateNum.getDate()+12)
console.log(dateNum);

monthTH = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนา',
    'เมษา',
    'พฤษภา',
    'มิถุนา',
    'กรกฏา',
    'สิงหา',
    'กันยา',
    'ตุลา',
    'พฤศจิกา',
    'ธันวา'
]

dayTH = [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหสั',
    'ศุกร์',
    'เสาร์',
]

dateNum.setFullYear(2021)

console.log(`${dayTH[dateNum.getDay()]} ${dateNum.getDate()} ${monthTH[dateNum.getMonth()]} ${[dateNum.getFullYear()+543]}`)

//อันไหนมาก่อน อันไหนมาหลัง 
//มากกว่า => อยู่หลัง น้อยกว่า => อยู่ก่อน

date1 = new Date(2021, 3, 1);
date2 = new Date(2021, 2, 1);

console.log(date1 > date2);
console.log(date1 === date2); // ห้ามทำ เทียบไม่ได้
// === ใน date เทียบกันไม่ได้ date => OBJ ของ date เป็น copy by reference ค่าจะไม่เท่ากัน
// ใช้ .getTime ในการช่วย

date3 = new Date(2021, 3, 1);
console.log(date1.getTime() === date3.getTime()); // true ใช้ได้

//เขียนฟังชันรับวัน 2 วัน แล้วเทียบกัน

now = new Date()
// deadline = new Date(10 *60 *1000 + now.getTime())

deadline = new Date(now); // โคลน Object แบบ Date
deadline.setMinutes(deadline.getMinutes() +10);

console.log(deadline)


date001 = new Date(2021, 2, 1, 12); // 1 Mar 21 12.00
date002 = new Date(2021, 1, 13, 9, 24, 17); // 13 Feb 21 9.24.17

timeDiff001 = date001.getTime() - date002.getTime();
day001 = Math.floor(timeDiff001 / 1000 / 60 /60 / 24 );

timeleft001 = timeDiff001 - day001 *24 *60 *60 *1000;
hour001 = Math.floor(timeleft001 /1000 /60 /60);

timeleft001 = timeleft001 - hour001 *1000 *60 *60;
min000 = Math.floor(timeleft001 /1000 /60);

console.log(day001)
console.log(min000)

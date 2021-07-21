// //64-02-22 _ EX01
// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
// }

// function test() {
//     alert('Hello');
// }

// test.defer(1000);

// //64-02-22 _ EX02
// Function.prototype.defer = function(ms) {
//     f = this;

//     return function(a , b) {
//         setTimeout(() => {
//             return f(a, b) 
//         }, ms);
//     }
// }

// function f(a, b) {
//     alert( a + b );
// }
  
// f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที




// //64-02-22 _ EX03

// given n an integer return smallest integer greater than n and the 
// sum of whost digit is twice as big as
// the sum of digit of n










// // Given N = 14 ,function should return 19. The sum of digit 19 (1+9=10) 
// // is twice as big as sum of digits of 
// // 14(1+4=5)
// // Given N = 10 the function should Return 11
// // Givng N = 99 the funtion should return 9999
// // N is integer within range[1..500]

// // ใส่ N = 14 ผลรวมเลขโดดเป็น 5
// // สิ่งที่ต้องการ 
// // 1. result > N (14) 
// // 2.  ผลรวมเลขโดดของ result ต้องเป็น 2 เท่าของผลรวมเลขโดดของ N ผลรวมเลขโดดของ N (1+4=5)  
// // ผลรวมเลขโดดของ result (1+9=10)
// // 3. result เป็นเลขที่น้อยที่สุด

// number = 99;
// numberString = new String(number)
// numberSplit = numberString.split('');

// if (numberSplit[1] == undefined) {
//     numberSum = +(numberSplit[0]);
// } else if (numberSplit[2] == undefined) {
//     numberSum = +(numberSplit[0]) + +(numberSplit[1]);
// } else {
//     numberSum = +(numberSplit[0]) + +(numberSplit[1]) + +(numberSplit[2]);
// }


// console.log(numberSum);

// // returnDigit = numberSum + number;
// numberSum2 = (numberSum*2);

// console.log(numberSum2)

// numberSum2_1 = numberSum2 - 1
// numberSum2_0 = numberSum2 - numberSum2_1

// numResult =  String(numberSum2_0) + numberSum2_1

// console.log(numResult)

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





// เฉลย


// ทำให้ค่าที่รับมา เป็น Array ของ String แต่ละตัว
// new String(n) => .spilt('') หรือ [...String(n)]
function calc(n) {
    let s = [...String(n)]
    console.log(s);
    
    let r = s.reduce( (acc ,item) => acc + Number(item) , 0) * 2
    //console.log(r) // =052 ; เพราะตอนแรก ค่าใน Array เป็น String ต้องแปลงสักตัวเป็นตัวเลขก่อน เพื่อให้เป็นการ + Number แทนการ + String ที่เป็นการต่อคำ
    // => แปลง item เป็น Number ใส่ Number(item) หรือ ใส่ +item ก็ได้ ; *2 ตามโจทย์สั่ง
    console.log(r);

    let rs = String(r%9) + String('9').repeat(Math.floor(r/9))
    console.log(rs);

    let x = Number(rs)
    //แปลง ผลของ rs เป็น Number แล้วใส่เงื่อนไขที่ return ค่าตัวเลข ที่ผลบวกเลขเดี่ยวของมัน == ผลของ r ; ให้ x = n แล้ว x += 1 ขึ้นไปเรื่อยๆ จนได้ค่าแรกที่เท่ากัน (ค่าน้อยสุดที่เท่ากัน)
        if ( x < n ) {
            x = n
        }
        while ( [...String(x)].reduce( (acc ,item) => acc + Number(item) < r, 0) ) {
            x = x + 1 
        }
    // ตราบใดที่  ผลบวก  มันน้อยกว่า r จะวนหาไปเรื่อยๆ โดยเพิ่ม x + 1 ไปเรื่อยๆ พอไม่น้อยกว่าแล้ว จะคืนค่า x นั้นออกมา
    return x
}

// ดูหลักการว่า เลข 9 หลักสุดท้าย ต้องมีกี่ตัว ถึงจะ + เท่ากับเลขของ r 
// rs => หาเลข 9 จากหลักสุดท้ายก่อน ว่าต้องใช้กี่ตัวถึง จะพอ ; String(ตัวอักษร) repeat(พิมพ์ซ้ำ) Math.floor(ไม่เอาเศษ) r/9 ครั้ง  รวมกับ  String เศษของ r หาร 9 (r%9)


// return เป็นตัวเลข Number(rs)

// .repeat พิมพ์ String ซ้ำ ตามจำนวนที่ต้องการ

// console.log(calc(30));
// console.log(calc(15));
// console.log(calc(56));
// console.log(calc(20));


console.log(calc(14));
console.log(calc(10));
console.log(calc(99));


// refactor function ข้างบน
// function calc(n) {
//     let r = [...String(n)].reduce( (acc ,item) => acc + Number(item) , 0) * 2
//     let rs = String(r%9) + String('9').repeat(Math.floor(r/9))
//     let x = ( Number(rs) < n ) ? n : Number(rs)
//     while ( [...String(x)].reduce( (acc ,item) => acc + Number(item) < r) x += 1 
//     return x
// }


// เฉลย คุณA

// LOGIC
// input n = 14;   sum = 5;     double = 10;    sum = double?
//       n = 15;   sum = 6;     double = 10;    sum = double?
//       n = 16;   sum = 7;     double = 10;    sum = double?
//       n = 17;   sum = 8;     double = 10;    sum = double?
//       n = 18;   sum = 9;     double = 10;    sum = double?
//       n = 19;   sum = 10;    double = 10;    sum = double?

// ต้องหา sum หลายรอบ เพื่อให้ sum = double
// function add(a, b) {
//     return a + b
// }

// console.log(add(5, 4))
// console.log(add(15, 14))






// // โจทย์ EX DAY 01

// // d1 = new Date(2012 ,1 ,10 ,0 ,0)
// // d2 = new Date(2012 ,1 ,10 ,15 ,59)
// // d3 = new Date(2012 ,1 ,11 ,15 ,59)

// // toDateString ได้ออกมาเป็น วัน เดือน วันที่ ปี ไม่เอาเวลา => ถูกต้องที่สุด ถ้าไม่สน timezone
// function isSameDay (d1 ,d2) {
//     return (d1.toDateString() ===  d2.toDateString())
// }


// // ไม่ได้ เพราะ toUTCString เอาเวลา
// // function isSameDay (d1 ,d2) {
// //     return (d1.toUTCString() ===  d2.toUTCString())
// // }

// // ได้ แต่ไม่ถูกต้อง เพราะ มันจะเช็คแค่วัน ไม่เช็คเดือน/ปี
// // function isSameDay (d1 ,d2) {
// //     return (d1.getDate() ===  d2.getDate())
// // }


// console.log(d1.toDateString())
// console.log(d2.toDateString())
// console.log(d3.toDateString())


// console.log(d1.toUTCString())
// console.log(d2.toUTCString())
// console.log(d3.toUTCString())


// console.log(d1.getDate())
// console.log(d2.getDate())
// console.log(d3.getDate())


// console.log(isSameDay (d1 ,d2))
// console.log(isSameDay (d2 ,d3))







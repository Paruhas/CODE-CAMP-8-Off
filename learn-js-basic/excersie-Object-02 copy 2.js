// const isEmptyObject = obj => {
//     let result = true;             //ให้ตอนแรก = false จะได้ไม่เข้าเงื่อนไข
//     for (let key in obj) {
//         result = false;              //เมื่อเข้าเงื่อนไข ให้กลับเป็น true เพื่อบอกว่ามีค่า
//         break;
//     }
//     return result;
// }

// objEmpty = {}
// objNotEmpty = { one:1 , two:2 }

//#1 Iteration key = firstname => result = false & break คืนค่า result = false เพราะไม่ว่าง
//#2 Iteration key = lastname => result = true & break
//#3 Iteration key = age => result = true & break 

objA = { one:1 , two:2 , three:3}
for (let key in objA) {     // let key => กำหนดให้ key เป็นค่า KEY ใน ก้อนOBJECT objA
    console.log(`${key}`)   // แสดงค่า KEY ของ key(objA)
    console.log(`${objA[key]}`)     // แสดงค่า VALUE ของ key(objA)
    console.log(`${objA}`)
}
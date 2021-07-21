let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


// // ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
// // ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
// // ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน


// // function topSalary(salaries) {

// function topSalary(n) {
//     if (n == null) {
//         return null
//     }
//     newSalaries = Object.entries(n);
//     newSalaries.sort((a,b) => b[1] - a[1])
//     console.log(newSalaries)
//     const name = [];
//     let max = null;
//     for ( let [keys, value] of newSalaries ) {
//         if (max <= value) {
//             name.push(keys)
//             max = value
//         } else {
//             break
//         }
//     }
//     return { name, max }
// }

// console.log(topSalary(salaries))

// let salaries1 = {
//     "John": 100,
//     "Pete": 400,
//     "Mary": 250,
//     "Mike": 400
// };

// console.log(topSalary(salaries1))

// console.log(topSalary())







//เฉลยที่ไม่คืนค่าเงินเดือน


function topSalary(n) {
    if (n == null) {
        return null;
    }
    newSalaries = Object.entries(n);
    newSalaries.sort((a,b) => b[1] - a[1]);
    console.log(newSalaries);

    const name = [];
    let max = 0;

    for ( let [keys, value] of newSalaries ) {
        if (max <= value) {
            name.push(keys);
            max = value;
        } else {
            break;
        }
    }
    return { name: name.length > 0 ? name : null, max }
}

console.log(topSalary(salaries))

let salaries1 = {
    "John": 100,
    "Pete": 400,
    "Mary": 250,
    "Mike": 400
};

console.log(topSalary(salaries1))

console.log(topSalary())


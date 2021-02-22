/*
// a = Math.trunc(Math.random() * 1e1)
// b = ''

// for (i=1; Math.trunc(a)>=5 ;i++) {
//     a = Math.random()
//     b = a * 1e1 
// }

let a = Math.random()
let b = a * 1e1
let c = Math.trunc(b)

// console.log(a)
// console.log(b)
// console.log(c)

while (c>4 || c<0) {
    a = Math.random()
    b = a * 1e1 
    c = Math.trunc(b)
}

// console.log(a)
console.log(b)
// console.log(c)

function random(min, max) {
    return min + Math.random() * (max-min);
}

console.log(random(1,5));

*/

function randomInt(min , max) {
    return min + Math.floor(Math.random() * (max + 1 - min)); // +1 เพราะจะได้เป็น 5 ได้ด้วย
}

console.log(randomInt(1,5));
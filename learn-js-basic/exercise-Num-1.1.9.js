
// a = Math.trunc(Math.random() * 1e1)
// b = ''

// for (i=1; Math.trunc(a)>=5 ;i++) {
//     a = Math.random()
//     b = a * 1e1 
// }

function random(min, max) {

min = +prompt('min','1');
max = +prompt('max','5');

// min = 1
// max = 5

a = Math.random()
b = a * 1e1
c = Math.trunc(b)

// console.log(a)
// console.log(b)
// console.log(c)

while (c >= max || c < min) {
    a = Math.random()
    b = a * 1e1 
    c = Math.trunc(b)
    }


// console.log(a)
console.log(b)
// console.log(c)
}

random()

/*
function random(min, max) {
    return min + Math.random() * (max-min);
}

console.log(random(1,5));
*/
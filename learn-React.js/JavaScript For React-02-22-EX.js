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


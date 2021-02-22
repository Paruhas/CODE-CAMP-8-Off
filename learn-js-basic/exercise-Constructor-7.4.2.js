// function Test( key, value ) {
//     this.key = prompt()
//     this.value = prompt()
//     this.read = function () {
//         let startingValue = this.key + this.value
//         return this.startingValue
//     }
// }

//เอาคำตอบจากโจทย์เก่ามาแปลง
// let calculator = {
//     read: function() {
//         calculator.a = +prompt('Enter First Number','');
//         calculator.b = +prompt('Enter Second Number','');
//     },
//     sum: function() {
//         realSum = this.a + this.b;
//         return 'result of + is ' + realSum
//     },
//     mul: function() {
//         return 'result of * is ' + this.a * this.b
//     }
//   };
  
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// // //ทำข้อ 7.4.1 ก่อน
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a');
//         this.b = +prompt('b');
//     }
//     this.sum = function() {
//         realSum = this.a + this.b;
//         return 'result of + is ' + realSum;
//     }
//     this.mul = function() {
//         return 'result of * is ' + this.a * this.b;
//     }
// }

// const calc = new Calculator();
// calc.read()
// console.log(calc.sum());
// console.log(calc.mul());


//ข้อ 7.4.2
function Accumulator(startingValue) {
    this.value = startingValue;
    // startingValue = +prompt('Enter startingValue')
    this.read = function() {
        const key = +prompt('Enter Value');
        this.value = this.value + key;
        return this
    }
}

startingValue = 0;

const acc = new Accumulator(+prompt('Enter startingValue'));
console.log(acc.value); 
acc.read()
// acc.read();
// acc.read();
console.log(acc.value);
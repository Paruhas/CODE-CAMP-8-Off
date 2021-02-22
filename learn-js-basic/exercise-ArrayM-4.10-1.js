// //1.1

// array1 = [1, 2, 30, 400]
// array2 = array1.map(function(item,index,arr) {
//     return item * 2;
// });
// console.log(array2);

// //1.2

// array1 = [1, 2, 3, 4]
// array2 = array1.map(function(item,index,arr) {
//     return `${item}`
// });
// console.log(array2);

// //1.3

// array1 = [1, "1", 2, {}] 
// array2 = array1.map(function(item,index,arr) {
//     return typeof(item)
// });
// console.log(array2);

// //1.4

// array1 = ["apple", "banana", "orange"]
// array2 = array1.map(function(item,index,arr) {
//     return item.toUpperCase()
// });
// console.log(array2);

// //1.5

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]

// array2 = array1.map(function(item,index,arr) {
//     return item.name
// });
// console.log(array2);

// //1.6

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]

// array2 = array1.map(function(item,index,arr) {
//     return item.age
// });
// console.log(array2);

// //1.7

// array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" },
//   ]

// array2 = array1.map(function(item,index,arr) {
//     return item.name + ' ' + item.surname
// });
// console.log(array2);

// //1.8

// array1 = [1,3,4,5,6,7,8]

// array2 = array1.map(function(item,index,arr) {
//     return item%2==1 ? "odd" : "even"
// });
// console.log(array2);

// //1.9

// array1 = [1, -3, 2, 8, -4, 5]

// array2 = array1.map(function(item,index,arr) {
//     return item>0 ? item*1 : item*-1
// });
// console.log(array2);

// //1.10

// array1 = [100, 200.25, 300.84, 400.3]

// array2 = array1.map(function(item,index,arr) {
//     return item.toFixed(2)
// });
// console.log(array2);

// //1.11

// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]

// array2 = array1.map(function(item,index,arr) {
//     item.age = 2019 - item.birth.slice(0,4)
//     return item
// });
// console.log(array2);

// //1.12

array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]

monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"];

monthNamesTH = ["มค", "กพ", "มีค", "เมย", "พค", "มิย",
  "กค", "สค", "กย", "ตค", "พย", "ธค"];

array2 = array1.map(function(item,index,arr) {

date = new Date(item.birth) 
    return `<tr>
     <td>${item.name}</td>
     <td>${date.getDate()} ${((monthNames[date.getMonth()]))} ${date.getFullYear()}</td>
     </tr>`

});

console.log(array2);

// "<tr>
// <td>apple</td> 
// <td>01 jan 2000</td>
// </tr>",
// "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
// "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",

//==========================================================


// //2.1

// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]

// array2 = array1.map(function(item,index,arr) {
//     item.age = 2019 - item.birth.slice(0,4)
//     return item
// });
// console.log(array2);

// //2.1

// array1 = [1, 2, 30, 400] 

// array2 = array1.filter(function(item,index,arr) {
//     return item > 10
// });
// console.log(array2);

// //2.2

// array1 = [1, 2, 3, 4]

// array2 = array1.filter(function(item,index,arr) {
//     if (item%2 == 1)
//     return item
// });
// console.log(array2);

// //2.3

// array1 = [1, "1", 2, {}] 

// array2 = array1.filter(function(item,index,arr) {
//     // if ( typeof(1) == typeof(item))
//     // if ( Number.isInteger(item) )
//     // return item
//     return typeof(item) === 'number';
// });
// console.log(array2);

// //2.4

// array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]

// array2 = array1.filter(function(item,index,arr) {
//     return item.length > 6
// });
// console.log(array2);

// //2.5

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]

// array2 = array1.filter(function(item,index,arr) {
//     return item.age < 18
// });
// console.log(array2);


// //2.6

// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
// ]

// array2 = array1.filter(function(item,index,arr) {
//     return item.age != 32
// });
// console.log(array2);

// //2.7

// array1 = [1, -3, 2, 8, -4, 5]

// array2 = array1.filter(function(item,index,arr) {
//     if (item>0)
//     return item
// });
// console.log(array2);

// //2.8

// array1 = [1,3,4,5,6,7,8]

// array2 = array1.filter(function(item,index,arr) {
//     return item%3 == 0
// });
// console.log(array2);

// //2.9  

// array1 = ["peach", 1, -3, "2", {}, []]

// array2 = array1.filter(function(item,index,arr) {
//     return typeof(item) === "string";
// });
// console.log(array2);


// //2.10

// array1 = ["APPLE", "appLE", "PEACH", "PEach"]

// array2 = array1.filter(function(item,index,arr) {
//     if (item == item.toUpperCase())
//     return item
// });
// console.log(array2);

// //2.11

// array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
// ]

// array2 = array1.filter(function(item,index,arr) {
//     return item.birth.slice(5,7) == '10';
// });
// console.log(array2);

// //2.12

// array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]

// array2 = array1.filter(function(item,index,arr) {
//     return item.birth.slice(0,4) < 2000;
// });
// console.log(array2);

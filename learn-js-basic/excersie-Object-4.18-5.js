let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  

function multiplyNumeric(obj, times) {
//     const result = {};

//     for (let key in obj) {
//         if (+obj[key]) {
//             result[key] = obj[key] * times;
//         } else {
//             result[key] = obj[key];
//         }   
//     }
//     return result;
// }

const result = { ...obj };
for (let key in obj) {
    if (+obj[key]) result[key] = obj[key] * times;
}
 return result;
}

console.log(multiplyNumeric(menu,2))
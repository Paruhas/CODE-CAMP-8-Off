const sales = [
    {
      id: 1,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '01-01-2021',
      customer: 'Sun',
      discount: 0.2,
      type: 'Cash'
    },
    {
      id: 2,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '01-01-2021',
      customer: 'Tle',
      type: 'Credit'
    },
    {
      id: 3,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 36900
      },
      saleDate: '01-01-2021',
      customer: 'Beer',
      type: 'Cash'
    },
    {
      id: 4,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '01-01-2021',
      customer: 'Jit',
      discount: 0.2,
      type: 'Credit'
    },
    {
      id: 5,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 36900
      },
      saleDate: '01-01-2021',
      customer: 'Palm',
      type: 'Cash'
    },
    {
      id: 6,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '01-01-2021',
      customer: 'Top',    
      type: 'Credit'
    },
    {
      id: 7,
      product: {
        id: 4,
        name: 'Oppo',
        model: 'A15',
        unitPrice: 4299
      },
      saleDate: '02-01-2021',
      customer: 'Sun',    
      type: 'Credit'
    },
    {
      id: 8,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '02-01-2021',
      customer: 'Snap',
      discount: 0.1,
      type: 'Credit'
    },
    {
      id: 9,
      product: {
        id: 5,
        name: 'iPhone',
        model: '11 Pro',
        unitPrice: 36900
      },
      saleDate: '02-01-2021',
      customer: 'Ham',
      discount: 0.25,   
      type: 'Credit'
    },
    {
      id: 10,
      product: {
        id: 6,
        name: 'Samsung',
        model: 'A31',
        unitPrice: 7999
      },
      saleDate: '02-01-2021',
      customer: 'Ham',
      discount: 0.25,   
      type: 'Credit'
    },
    {
      id: 11,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '02-01-2021',
      customer: 'Tle',
      discount: 0.3,
      type: 'Airpay'
    },
    {
      id: 12,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '02-01-2021',
      customer: 'Micky',    
      type: 'Credit'
    },
    {
      id: 13,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '02-01-2021',
      customer: 'Boss',
      type: 'Cash'
    },
    {
      id: 14,
      product: {
        id: 7,
        name: 'Oppo',
        model: 'Reno5',
        unitPrice: 19990
      },
      saleDate: '02-01-2021',
      customer: 'Sila',       
      type: 'Airpay'
    },
    {
      id: 15,
      product: {
        id: 8,
        name: 'Xiaomi',
        model: 'Redmi 9C',
        unitPrice: 3399
      },
      saleDate: '02-01-2021',
      customer: 'Top',       
      type: 'Cash'
    },
    {
      id: 16,
      product: {
        id: 9,
        name: 'Samsung',
        model: 'A42',
        unitPrice: 11990
      },
      saleDate: '03-01-2021',
      customer: 'Cin',       
      type: 'Cash'
    },
    {
      id: 17,
      product: {
        id: 6,
        name: 'Samsung',
        model: 'A31',
        unitPrice: 7999
      },
      saleDate: '03-01-2021',
      customer: 'Cin',       
      type: 'Cash'
    },
    {
      id: 18,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 36900
      },
      saleDate: '03-01-2021',
      customer: 'Sine',
      discount: 0.3,
      type: 'Airpay'
    },
    {
      id: 19,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '03-01-2021',
      customer: 'Note',
      type: 'Credit'
    },
    {
      id: 20,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '03-01-2021',
      customer: 'Micky',    
      type: 'Credit'
    },
    {
      id: 21,
      product: {
        id: 10,
        name: 'Vivo',
        model: 'V20 Pro',
        unitPrice: 14999
      },
      saleDate: '04-01-2021',
      customer: 'Bank',       
      type: 'Cash'
    },
    {
      id: 22,
      product: {
        id: 10,
        name: 'Vivo',
        model: 'V20 Pro',
        unitPrice: 14999
      },
      saleDate: '04-01-2021',
      customer: 'Bank',       
      type: 'Cash'
    },
    {
      id: 23,
      product: {
        id: 7,
        name: 'Oppo',
        model: 'Reno5',
        unitPrice: 19990
      },
      saleDate: '04-01-2021',
      customer: 'Leo',       
      type: 'Cash'
    },
    {
      id: 24,
      product: {
        id: 9,
        name: 'Samsung',
        model: 'A42',
        unitPrice: 11990
      },
      saleDate: '04-01-2021',
      customer: 'Game',       
      type: 'Cash'
    },
    {
      id: 25,
      product: {
        id: 6,
        name: 'Samsung',
        model: 'A31',
        unitPrice: 7999
      },
      saleDate: '04-01-2021',
      customer: 'U',
      discount: 0.3,   
      type: 'Airpay'
    },
    {
      id: 26,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '05-01-2021',
      customer: 'Boy',    
      type: 'Credit'
    },
    {
      id: 27,
      product: {
        id: 11,
        name: 'Vivo',
        model: 'X50 Pro',
        unitPrice: 19999
      },
      saleDate: '05-01-2021',
      customer: 'Boom',       
      type: 'True Wallet'
    },
    {
      id: 28,
      product: {
        id: 12,
        name: 'Vivo',
        model: 'V20',
        unitPrice: 10999
      },
      saleDate: '05-01-2021',
      customer: 'Boom',       
      type: 'True Wallet'
    },
    {
      id: 29,
      product: {
        id: 9,
        name: 'Samsung',
        model: 'A42',
        unitPrice: 11990
      },
      saleDate: '05-01-2021',
      customer: 'Am',       
      type: 'Cash'
    },
    {
      id: 30,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '06-01-2021',
      customer: 'Um',
      type: 'True Wallet'
    },
    {
      id: 31,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '06-01-2021',
      customer: 'Win',
      discount: 0.25, 
      type: 'Airpay'
    },
    {
      id: 32,
      product: {
        id: 7,
        name: 'Oppo',
        model: 'Reno5',
        unitPrice: 19990
      },
      saleDate: '06-01-2021',
      customer: 'Cin',       
      type: 'Cash'
    },
    {
      id: 33,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '07-01-2021',
      customer: 'Palm',
      discount: 0.1,
      type: 'Credit'
    },
    {
      id: 34,
      product: {
        id: 5,
        name: 'iPhone',
        model: '11 Pro',
        unitPrice: 36900
      },
      saleDate: '07-01-2021',
      customer: 'Dom',
      discount: 0.15,   
      type: 'Credit'
    },
    {
      id: 35,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '07-01-2021',
      customer: 'Sern',    
      type: 'True Wallet'
    },
    {
      id: 36,
      product: {
        id: 13,
        name: 'iPhone',
        model: 'SE2000',
        unitPrice: 14900
      },
      saleDate: '07-01-2021',
      customer: 'Beer',       
      type: 'Cash'
    },
    {
      id: 37,
      product: {
        id: 14,
        name: 'iPhone',
        model: '12 Mini',
        unitPrice: 25900
      },
      saleDate: '07-01-2021',
      customer: 'Game',
      discount: 0.2,      
      type: 'Credit'
    },
    {
      id: 38,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '07-01-2021',
      customer: 'Sun',
      discount: 0.25,
      type: 'Airpay'
    },
    {
      id: 39,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '07-01-2021',
      customer: 'Tom',    
      type: 'Cash'
    },
    {
      id: 40,
      product: {
        id: 14,
        name: 'iPhone',
        model: '12 Mini',
        unitPrice: 25900
      },
      saleDate: '08-01-2021',
      customer: 'Ham',         
      type: 'Cash'
    },
    {
      id: 41,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '08-01-2021',
      customer: 'Dom',
      type: 'Credit'
    },
    {
      id: 42,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '08-01-2021',
      customer: 'Cin',    
      type: 'True Wallet'
    },
    {
      id: 43,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '08-01-2021',
      customer: 'Tle',    
      type: 'Cash'
    },
    {
      id: 44,
      product: {
        id: 7,
        name: 'Oppo',
        model: 'Reno5',
        unitPrice: 19990
      },
      saleDate: '09-01-2021',
      customer: 'U',       
      type: 'Cash'
    },
    {
      id: 45,
      product: {
        id: 11,
        name: 'Vivo',
        model: 'X50 Pro',
        unitPrice: 19999
      },
      saleDate: '09-01-2021',
      customer: 'Am',
      discount: 0.35,    
      type: 'Airpay'
    },
    {
      id: 46,
      product: {
        id: 10,
        name: 'Vivo',
        model: 'V20 Pro',
        unitPrice: 14999
      },
      saleDate: '10-01-2021',
      customer: 'Sern',       
      type: 'Cash'
    },
    {
      id: 47,
      product: {
        id: 1,
        name: 'iPhone',
        model: '12 Pro',
        unitPrice: 48900
      },
      saleDate: '10-01-2021',
      customer: 'Game',
      discount: 0.3,
      type: 'Credit'
    },
    {
      id: 48,
      product: {
        id: 9,
        name: 'Samsung',
        model: 'A42',
        unitPrice: 11990
      },
      saleDate: '10-01-2021',
      customer: 'Jit',       
      type: 'Cash'
    },
    {
      id: 49,
      product: {
        id: 14,
        name: 'iPhone',
        model: '12 Mini',
        unitPrice: 25900
      },
      saleDate: '10-01-2021',
      customer: 'Snap',         
      type: 'True Wallet'
    },
    {
      id: 50,
      product: {
        id: 2,
        name: 'iPhone',
        model: '12',
        unitPrice: 32900
      },
      saleDate: '10-01-2021',
      customer: 'Micky',
      type: 'Cash'
    },
    {
      id: 51,
      product: {
        id: 3,
        name: 'Samsung',
        model: 'S21',
        unitPrice: 27900
      },
      saleDate: '11-01-2021',
      customer: 'Boss',
      discount: 0.2,
      type: 'Credit'
    },
    {
      id: 52,
      product: {
        id: 8,
        name: 'Xiaomi',
        model: 'Redmi 9C',
        unitPrice: 3399
      },
      saleDate: '11-01-2021',
      customer: 'Leo',
      discount: 0.05,      
      type: 'Credit'
    },
    {
      id: 53,
      product: {
        id: 10,
        name: 'Vivo',
        model: 'V20 Pro',
        unitPrice: 14999
      },
      saleDate: '11-01-2021',
      customer: 'Sine',
      discount: 0.15,
      type: 'True Wallet'
    },
    {
      id: 54,
      product: {
        id: 14,
        name: 'iPhone',
        model: '12 Mini',
        unitPrice: 25900
      },
      saleDate: '07-01-2021',
      customer: 'Um',
      discount: 0.1,      
      type: 'Cash'
    },
  ]


// 1. จำนวน transaction ทั้งหมด

TEST1 = sales.length;
console.log(`TEST1 = ${TEST1}`)

// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง

// FIND = sales.find(function(item) {
//   return item.customer 
// })

// FIND = sales.map(function(item) {
//   return item.customer 
// })

// setFIND = [...new Set(FIND)]

// console.log(setFIND)

// console.log(setFIND.length)

// a = 0
// aaa = sales.reduce((acc, item) => {
//   for ( j = 0 ; j < setFIND.length ; j++)
//     focusCustomerSet = setFIND[j];
//       for ( i = 0 ; i < sales.length ; i++ )
//         focusItemPerId = item.customer[i]
//         console.log(focusItemPerId)
//         if (1) {
//           a = a + item.unitPrice
//           console.log(a)
//         }
// }, 0)

// TESTp = 0
// abc = 0
// TEST2 = sales.reduce((acc, item) => { 
//   // console.log(item.customer)
//   // console.log(typeof item.customer)
//   // console.log(setFIND[0])
//   // console.log(item.customer == setFIND[0]) 
//   for ( i = 0 ; i < setFIND.length ; i++)
//   if (item.customer == setFIND[i]) {
//   // if (String(setFIND[0]) === String('Sun')) {
//     abc = (item.product.unitPrice) * ( (item.discount) ? (1-item.discount) : 1)
//     TESTp = TESTp + abc
//     console.log(TESTp)
//     }
//     TESTp = 0
//     abc = 0
//   // console.log(abc)
//   // return TESTp
// }, 0) 

// console.log(TEST2)


// TESTp = 0
// abc = 0
// TEST2 = sales.reduce((acc, item) => { 
//   // console.log(item.customer)
//   // console.log(typeof item.customer)
//   // console.log(setFIND[0])
//   // console.log(item.customer == setFIND[0]) 
//   for ( i = 0 ; i < setFIND.length ; i++) {
//   if (item.customer == setFIND[i]) {
//   // if (String(setFIND[0]) === String('Sun')) {
//     abc = (item.product.unitPrice) * ( (item.discount) ? (1-item.discount) : 1)
//     TESTp = TESTp + abc
    
//     }

    
//   }
//   // abc = 0
//   console.log(TESTp)
//   // TESTp = 0
//   // console.log(abc)
//   // return TESTp
// }, setFIND) 

// console.log(TEST2)




///////////////////////////////

// 3. ยอดขายทั้งหมด (หลังหัก discount)

// netPrice = 0
// TEST3 = sales.reduce(function(acc, item) { 
//   netPricePerId = (item.product.unitPrice) * ( (item.discount) ? (1-item.discount) : 1);
//   // netPricePerId = (item.product.unitPrice);
//   netPrice = netPrice + netPricePerId;
//   // console.log(netPricePerId)
//   // console.log(acc)
//   // console.log(netPricePerId)
//   return netPrice
//   // acc[item.id] = item.product.unitPrice
//   // return acc
// }, {}) 

// console.log(`TEST3 = ${TEST3}`)

// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่


// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

// t5 = sales.reduce((acc, item) => {
//   if (acc[item.product.name]) {
//     acc[item.product.name]++
//   } else {
//     acc[item.product.name] = 1
//   }
//   // acc.push(item.product.name)
//   return acc
// }, [])

// console.log(t5)

// t55 = sales.reduce((acc, item) => {
//   if (acc[item.product.model]) {
//     acc[item.product.model]++
//   } else {
//     acc[item.product.model] = 1
//   }
//   // acc.push(item.product.name)
//   return acc
// }, {})

// console.log(t55)

// t555 = sales.reduce((acc, item, index) => {
//   acc[index] = item.product
//   return acc
// }, [])

// console.log(t555)

// a = []
// // t551 = sales.forEach(function(item, index, arr) {

//   // b = item.product.model
//   // // console.log(b)
//   // // c = Object.assign(b);
//   // // console.log(c)
//   // a[item.id] = b
// // })

// c = []
// d = 0

// t555.forEach(function(item ,index ,arr) {
//   if (!a.includes(item.model))  {
//   a.push(item.model)
//   b = {}
//   b.name = item.name
//   b.model = item.model
//   c.push(b)
//   } 
//   // if (!a.includes(item.unitPrice)) {
//   //   a.(item.unitPrice)++
//   // }
//   // if (!a.includes(item.name + ' ' + item.model))  {
//   // a.push(item.name + ' ' + item.model)
//   // }
// });

// console.log(a)

// aModel = [...a]


// for ( i = 0 ; i < a.length ; i++ ) {
// a[i] = sales.reduce((acc, item, index, arr) => {
//   if (item.product.model == a[i]) {
//     // console.log(item.product.model)
//     if (item.discount != undefined) {
//       acc = acc + item.product.unitPrice * (1-(item.discount))
//     } else {
//       acc = acc + item.product.unitPrice * 1
//     }
//   }
//   // console.log(acc)
//   return acc
  
// }, 0)}


// // console.log(a.length)
// // a.sort(function (a,b) {
// //   return a[0] - b[0]
// // })

// console.log(a)

// aSum = [...a]

// console.log(aModel)
// console.log(aSum)

// console.log(aModel[0])

// // for (key of aModel) {
// //   console.log
// // }

// // console.log(c)

// let e = {}

// // e.model = aModel
// // e.Price = aSum

// console.log(a.length)

// for ( i = 0 ; i < +a.length ; i++) {
//   e[aModel[i]] = aSum[i]
//   // console.log(e)
// }

// console.log(e)

// // console.log(t8869)

// // console.log(c.length)

// // c.sort(function (a,b) {
// //   return b[0] - a[0]
// // })
// // c.sort((a, b) => (a.name > b.name) ? -1 : 1)

// console.log(c)

// var output = [];

// c.forEach(function(item) {
//   let existing = output.filter(function(v, i) {
//     return v.name == item.name;
//   });
//   if (existing.length) {
//     var existingIndex = output.indexOf(existing[0]);
//     output[existingIndex].model = output[existingIndex].model.concat(item.model);
//   } else {
//     if (typeof item.model == 'string')
//       item.model = [item.model];
//     output.push(item);
//   }
// });

// console.dir(output);

// // t5_1 = sales.reduce((acc, item) => {
// //   if (item.name === '')
// // }, 0)

const result5 = sales.reduce((acc, item, index) => {

  if ([item.discount]) {
    total = [item.product.unitPrice] * (1 - [item.discount])
  } else {
    total = [item.product.unitPrice] * 1
  }
  
  if (acc[item.product.name]) {

    if (acc[item.product.name][item.product.model]) {
      acc[item.product.name][item.product.model] = {
        count: acc[item.product.name][item.product.model].count + 1,
        total: acc[item.product.name][item.product.model].total + total
      }
    } else {
      acc[item.product.name][item.product.model] = {
        count: 1,
        total
      }
    }
  } else {
    acc[item.product.name] = {
      [item.product.model]: {
        count: 1,
        total
      }
    }
  }

  return acc;
}, {});
console.log(result5)

// const result5_1 = sales.reduce((acc, item) => {
//   const { product : { name, model, unitPrice }, discount } = item;
  
//   const total = ((1 - discount) || 1) * unitPrice;

//   if (acc[name]) {
//     if (acc[name][model]) {
//       acc[name][model] = {
//         count: acc[name][model].count + 1,
//         total: acc[name][model].total + total
//       }
//     } else {
//       acc[name][model] = {
//         count: 1,
//         total
//       }
//     }
//   } else {
//     acc[name] = {
//       [model]: {
//         count: 1,
//         total
//       }
//     }
//   }

//   return acc;
// }, {});
// console.log(result5_1)


// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)

// typeSelect = sales.reduce((acc, item) => {
//     acc[item.type] = item.type
//     return acc;
// }, {})

// console.log(typeSelect)

// mapSalesType = sales.map(item => typeSelect[item.type])
// // console.log(mapSalesType)

// reduceCountType = (acc, item) => {
//   if (acc[item]) {
//     acc[item] = acc[item] + 1  ;
//   } else {
//     acc[item] = 1
//   }
//   return acc;
// }

// allSalesType = mapSalesType.reduce(reduceCountType, {});

// console.log(allSalesType)

// 7. หายอดรวมในแต่ละวัน

// dateSelect = sales.reduce((acc, item) => {
//   acc[item.saleDate] = item.saleDate
//   return acc;
// }, {})

// // console.log(dateSelect)

// mapSalesDate = sales.map(item => dateSelect[item.saleDate])
// // console.log(mapSalesDate)

// reduceCountDate = (acc, item) => {
// if (acc[item]) {
//   acc[item] = acc[item] + 1  ;
// } else {
//   acc[item] = 1
// }
// return acc;
// }

// allDate = mapSalesDate.reduce(reduceCountDate, {});

// console.log(allDate)


// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย

// brandSelect = sales.reduce((acc, item) => {
//   acc[item.product.model] = item.product.model
//   return acc;
// }, {})

// // console.log(brandSelect)

// mapBrandSelect = sales.map(item => brandSelect[item.product.model])
// // console.log(mapBrandSelect)

// reduceCountBrand = (acc, item) => {
// if (acc[item]) {
//   acc[item] = acc[item] + 1  ;
// } else {
//   acc[item] = 1
// }
// return acc;
// }

// allBrand = mapBrandSelect.reduce(reduceCountBrand, {});

// // console.log(allBrand)

// sortableAllBrand = [];
// for (var key in allBrand) {
//   sortableAllBrand.push([key, allBrand[key]]);
// }

// sortableAllBrand.sort(function(a, b) {
//     return b[1] - a[1] ;
// });

// console.log(sortableAllBrand)


// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

customerSelect = sales.reduce((acc, item) => {
  acc[item.customer] = item.customer
  return acc;
}, {})

// console.log(customerSelect)

mapCustomerSelect = sales.map(item => customerSelect[item.customer])
// console.log(mapCustomerSelect)

reduceCountCustomer = (acc, item) => {
  // // if ([item.discount]) {
  // //   total = [item.product.unitPrice] * (1 - [item.discount])
  // // } else {
  // //   total = [item.product.unitPrice] * 1
  // // }

  if (acc[item]) {
    acc[item] = acc[item] + 1  ;
  } else {
    acc[item] = 1
  }
  return acc;
}

allCustomer = mapCustomerSelect.reduce(reduceCountCustomer, {});

// console.log(allCustomer)

sortableAllCustomer = [];
for (var key in allCustomer) {
  sortableAllCustomer.push([key, allCustomer[key]]);
}

sortableAllCustomer.sort(function(a, b) {
    return b[1] - a[1] ;
});

console.log(sortableAllCustomer)























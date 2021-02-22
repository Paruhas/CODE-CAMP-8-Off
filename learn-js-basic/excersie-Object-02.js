let Key1;
let Value1;
let Key_Value = {};


while (1) {
    const Key1 = prompt('Enter Key');
    if ( Key1 === 'stop') break;
    const Value1 = prompt('Enter Value');
    if ( Value1 === 'stop') break;
    Key_Value[Key1] = Value1;
}

console.log(Key_Value);

// for ( Key1 = 0 ; n !== 'Stop' ; Key1 ) {
//     Key1 = prompt('Key1','Weight');
//     Value1 = prompt('Value1','112');

// }

// // Key1 = Value1;

// let Human = {
//     name : 'Bank',
//     age : 26,
//     address : {
//         addressNum : 16,
//         addressMoo : 1,
//         AddressDistrict : 'BangDue',
//         AddressZone : 'AmphoeMueang',
//         AddressChangwut : 'PathumThani',
//     },
//     single : false,
//     IQ : 0,
//     [Key1] : Value1,
// }

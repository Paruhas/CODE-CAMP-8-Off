function extractCurrencyValue(string, rate) {
    string = prompt('Enter $ Dollar','$120');
    rate = +prompt('Enter Exchange rate (default is 30.5)','30.5');
    stringNoDollar = string.slice(1);
    intNoDollar = +stringNoDollar;
    result = intNoDollar * rate;
    // return `extractCurrencyValue from ${string} with exchange rate = ${rate} is === ${result}฿`;
    console.log(`extractCurrencyValue from ${string} with exchange rate = ${rate} is === ${result}฿`);  
    return string, rate, result;
}

// extractCurrencyValue()
// console.log(extractCurrencyValue());
alert( extractCurrencyValue('$120', 30.5) === 3660 )




// const extractCurrencyValue = function(str, rate) {
//     // const dollar  = str.slice(1);
//     // return dollar * rate;
//     return str.slice(1) * rate;
// };

// console.log(extractCurrencyValue('120$', 30.5));
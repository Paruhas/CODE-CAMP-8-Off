
style = ['Jazz','Blues'];
style.push('Rock-n-Roll'); // ['Jazz','Blues','Rock-n-Roll']
style[1] = 'Classic'; // ['Jazz','Classic''Rock-n-Roll']
style.shift(); // ['Classic','Rock-n-Roll']
style.unshift('Rap','Reggaee'); // ['Rap','Reggaee','Classic','Rock-n-Roll']

// value = 0;
// newArray = [];

// while ( !isNaN(value) ) {
//     if ( !isNaN(value) ) {
//         break
//     } else {
//         value = +prompt()
//     newArray.push(value)
//     }
// }

function sumInput() {
    inputs = [];
    while (1) {
        newValue = prompt('Enter Number');
        // if (!Number(newValue) && newValue != 0 || newValue == '' ) break; 
        if (isNaN(Number(newValue)) || newValue != 0 || newValue.trim() == '' ) break; 
// เพื่อให้กด cancel แล้วหยุด และ ใส่ 0 แล้วหยุด หรือ ไม่ใส่ค่า prompt (prompt = '' หรือ '     ')  
        inputs.push(newValue)
    };
    
    sum = 0;
    inputs.forEach(function(value,index,arr) {
        sum = sum + +value
    });

    console.log(inputs);
    console.log(sum);
}

sumInput()
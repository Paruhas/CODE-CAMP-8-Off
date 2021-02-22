function truncate(str, maxlenght) {
    str = prompt('Enter String','What I\'d like to tell on this topic is');
    maxlenght = prompt('Enter Maxlenght','20');
    lengthStr = str.length;
    if ( +lengthStr < maxlenght ) {
        return str
    } else {
        b = str.slice(0,20) + '...'
        return b 
    }
}

console.log(truncate())

// const truncate = function(str, maxlenght) {
//     let result = str;

//     if (str.length > maxlenght) {
//         result = str.slice(0, maxlenght) + '...'
//     }
//     return result
// }

// console.log(truncate('What I\'d like to tell on this topic is':', 20);
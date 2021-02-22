function ucFirst() {
    n = prompt('','aaa');
    if ( !isNaN(n) ) {
        b = 'Enter Text'
        return b
    } else {
        a = (n[0].toUpperCase()) + (n.slice(1));
        return a
    }
}

// ucFirst()
console.log(ucFirst())


/*
function ucFirst (str) {
    if (typeof str !== 'string') return 'Require String';
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst(aaa))
console.log(ucFirst(123))
*/
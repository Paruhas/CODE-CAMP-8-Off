// function checkSpam() {
//     str = prompt('Input');
//     if (typeof str !== 'string') return 'Require input strong';
//     checkedString = str.toLowerCase();
//     return checkedString.includes('xxx') || checkedString.includes('viagra');
// }

// console.log(checkSpam(str))

function checkSpam() {
    n = prompt('','XXX');
    while ( !isNaN(n) ) {
        alert('Enter Text')
        n = prompt('','XXX');
    }
    lowerN = n.toLowerCase();
    censor1 = lowerN.includes('xxx');
    censor2 = lowerN.includes('viagra');
    if ( censor1 || censor2 ) {
        return true
    } else {
        return false
    }   
}

// checkSpam()
console.log(checkSpam())
// n = 97
// a = 0

// for ( i=1 ; i<=n ; i++ ) {
//     if ( n%i == 0 ) {
//         a = a + 1
//     }
// }
// if ( a > 2 ) {
//     console.log(false)
// } else {
//     console.log(true)
// }

function findNumber(n) {
    a = 0

for ( i=1 ; i<=n ; i++ ) {
    if ( n%i == 0 ) {
        a = a + 1
    }
}
if ( a > 2 ) {
    console.log(false)
} else {
    console.log(true)
}
}
/*

//exercise01
function draw(n) {
    let star = '';
    for ( let i = 1; i <= n; i++) {
        star = star + '*';
    }
    console.log(star)
}

draw(3) // ***



//exercise02 for while repeat ซ้อนกัน
function draw(n) {
    let star = '';
    for ( let i = 1; i <= n; i++ ) {
        for ( let j = 1; j <= n; j++ ) {
            star = star + '*';
        }
        star = star + '\n';
    }
    console.log(star)
}

draw(3) // *** 3 บรรทัด

// #1 j=1; i=1; star = '' + '*' => '*' 
// #2 j=2; i=1; star = '*' + '*' => '**' 
// #3 j=3; i=1; star = '**' + '*' => '***' 
// #End inner loop star = '***' + '\n' => '***\n'
// #1 j=1; i=2; star = '***\n' + '*' => '***\n*'
// #1 j=1; i=2; star = '***\n*' + '*' => '***\n**'
// #1 j=1; i=2; star = '***\n**' + '*' => '***\n***'


//exercise03
function draw(n) {
    let star = '';
    for ( let j = 1; j <= n; j++ ) {
        for ( let i = 1; i <= n; i++ ) {
            star = star + i;
        }
        star = star + '\n';
    }
    console.log(star)
}

draw(3) // 123 3 บรรทัด


//exercise04
function draw(n) {
    let star = '';
    for ( let j = 1; j <= n; j++ ) {
        for ( let i = 1; i <= n; i++ ) {
            star = star + j;
        }
        star = star + '\n';
    }
    console.log(star)
}

draw(3) // 111 222 333


//exercise05
function draw(n) {
    let star = '';
    for ( let j = n; j-1 >= 0; j--  ) {
        for ( let i = n; i-1 >= 0; i-- ) {
            star = star + j;
        }
        star = star  + '\n';    
    }   
    console.log(star)
}

draw(3) // 333 222 111


// exercise06
function draw(n) {
    let star = '';
    for ( let j = 1; j <= n; j++ ) {
        for ( let i = 1 ; i <= n ; i++) {
            star = star + ((j*n)-(n-i));
        }
        star = star  + '\n';
    }   
    console.log(star)   
}

draw(3) // 123 456 789


//exercise07 (3*n)-(i+7)
function draw(n) {
    let star = '';
    for ( let j = n; j-1 >= 0; j-- ) {
        for ( let i = n; i-1 >= 0; i-- ) {
            star = star + ((j*n)-(n-i));
        }
        star = star  + '\n';
    }   
    console.log(star)   
}

draw(3) // 987 654 321 


//exercise08
function draw(n) {
    let star = '';
    for ( let j = n ; j < (n*2) ; j++ ) {
        for ( let i = n ; i < n+1 ; i++ ) {
            i = j
            star = star + ((i+j)-n-n);
        }
        star = star + '\n';
    }   
    console.log(star)   
}

for ( i = 0 ; i < n ; i ++ )
console.log(2*i)

draw(3) // 0 2 4


//exercise09
function draw(n) {
    let star = '';
    for ( let j = n ; j < (n*2) ; j++ ) {
        for ( let i = n ; i < n+1 ; i++ ) {
            i = j+2
            star = star + ((i+j)-n-n);
        }
        star = star + '\n';
    }   
    console.log(star)   
}

for ( i = 1 ; i < n + 1 ; i ++ )
console.log(2*i)

draw(3) // 2 4 6


//exercise10
function draw(n) {

for (j=1;j<=n;j++) {
    let a = ''
    for (i=j;i<=j*n;i=i+j) {
        a = a + i
        }
        console.log(a)
    }
}

draw(3) // 


//exercise18
function draw18(n) {
    let star = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // star += i > j ? '-' : '*';
            if (i > j) {
                star = star + '-';
            } else {
                star = star + '*';
            }
        }
        star = star + '\n';
    }
    console.log(star);
}

draw18(3)

*/

// //exercise11
// function draw(n) {

// for (j=1;j<=n;j++) {
//     let a = ''
//     for (i=1;i<=n;i=i+1) {
//         if (+i == +j) {
//             b = '_'
//             } else {
//             b = '*'
//             }
//         a = a + b
//         }
//     console.log(a);   
//     }
// }

// draw(3)


// //exercise12
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i + +j == n+1 ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise13
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i - +j >= 1 ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise14
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i + +j >= +n+2 ) {
//                 b = '_'
//             } 
//             else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise15
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i - +j >= 1 ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }

//     for (j=2 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i + +j >= +n+2 ) {
//                 b = '_'
//             } 
//             else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }
// draw(4)


// //exercise15 - 2 
// function draw(n) {
//     c = 0
//     d = n+n
//     for (j=1 ; j<=n+n-1 ; j++) {
//         let a = ''
//         if ( c < d ) {
//             c = c + 2
//         }
//         for (i=1 ; i<=n ; i++) {
//             if ( i+j <= c ) {
//                 b = '*'
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }


// draw(4)


// //exercise16
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i - +j >= 1 ) {
//                 b = '_'
//             } else {
//                 b = j
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
//     for (j=2 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( +i + +j >= +n+2 ) {
//                 b = '_'
//             } 
//             else {
//                 b = j
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(3)


// //exercise16 - 2 
// function draw(n) {
//     c = 0
//     d = n+n
//     for (j=1 ; j<=n+n-1 ; j++) {
//         let a = ''
//         if ( c < d ) {
//             c = c + 2
//         }
//         for (i=1 ; i<=n ; i++) {
//             if ( i+j <= c ) {
//                 if (j < n) {
//                     b = j
//                 } else {
//                 b = n
//                 }
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }


// draw(4)


// //exercise17
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( i+j <= n ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//         // for (i=n ; i>=1 ; i--) {
//         //     if ( j - i < 0 ) {
//         //         b = '_'
//         //     } else {
//         //         b = '*'
//         //     }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise18
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( i-j < 0 ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise19
// function draw(n) {
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( i+j <= n ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
//     for (j=2 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( i-j < 0 ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise19 -2
// function draw(n) {
//     c = n
//     d = n*-1
//     for (j=1 ; j<=n+n-1 ; j++) {
//         let a = ''
//         if ( c > d ) {
//             c = c - 2
//         }
//         for (i=1 ; i<=n ; i++) {
//             if ( i-j <= c ) {
//                 b = '_'
//             } else {
//                 b = '*'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise20
// function draw(n) {
//     let c = 0
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
        
//         for (i=1 ; i<=n ; i++) {
//             if ( i+j <= n ) {
//                 b = '_'
//             } else {
//                 c = c + 1
//                 b = c
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }

//     console.log(c)
//     for (j=2 ; j<=n ; j++) {
//         let a = ''
//         for (i=1 ; i<=n ; i++) {
//             if ( i-j < 0 ) {
//                 b = '_'
//             } else {
//                 c = c + 1
//                 b = c
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise21
// function draw(n) {
//     let c = n
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         c = c-2
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z < n && z > c ) {
//                 b = '*'
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise22
// function draw(n) {
//     let c = n+n
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         c = c-2
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z <= c && z >= 0) {
//                 b = '*'
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise23
// function draw(n) {
//     let c = n
//     for (j=1 ; j<n ; j++) {
//         let a = ''
//         c = c-2
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z < n && z > c ) {
//                 b = '*'
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }

//     let d = n+n
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         d = d-2
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z <= d && z >= 0) {
//                 b = '*'
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)


// //exercise24
// function draw(n) {
//     let c = n
//     e = 0
//     for (j=1 ; j<n ; j++) {
//         let a = ''
//         c = c-2
        
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z < n && z > c ) {
//                 e = e + 1
//                 b = e
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
    
//     let d = n+n
//     for (j=1 ; j<=n ; j++) {
//         let a = ''
//         d = d-2
//         for (i=1 ; i<=n+n-1 ; i++) {
//             z = i-j
//             if ( z <= d && z >= 0) {
//                 e = e + 1
//                 b = e
//             } else {
//                 b = '_'
//             }
//                 a = a + b
//         }
//         console.log(a)
//     }
// }

// draw(4)
















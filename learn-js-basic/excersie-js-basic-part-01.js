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

example01

n = 4
for (i=1;i<=n;i++) {
let a = ''
    for (j=0;j<i;j++) {
     a = a + j
        } 
     console.log(a + '\n')
}


*/


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
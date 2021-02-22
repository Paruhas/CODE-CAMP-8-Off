let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let salaries1 = {
    John: 50,
    Ann: 160,
    Pete: 130
}

function sumAllSalaries(n) {
sum = 0;
for (let key in n) {
    // a = n[key]
    sum  = sum + n[key]
}
return sum
// console.log(sum)
}
// console.log(sumAllSalaries(salaries1))
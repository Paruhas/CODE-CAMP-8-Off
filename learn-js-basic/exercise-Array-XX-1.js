numbers = [2,3,5,7,11,13];
//find newNumber = [4,9,25,49,121,169];
n = 2
newNumber1 = [];
newNumber2 = [];
newNumber3 = [];

for (i = 0 ; i < numbers.length ; i++) {
    console.log(i + '. ' + numbers[i]**n);
    newNumber1[i] = numbers[i]**n;
}

j = 0
for (nub of numbers) {
    console.log(j + '. ' + nub**n);
    newNumber2[j] = nub**n;
    j++;
}

numbers.forEach(function(num,index,arr) {
    console.log(index + '. ' + num**n);
    newNumber3[index] = num**n
    return newNumber3
});

// function() 


let score = Number(prompt('Enter your SCORE','80'));

if (!score) {
    alert('ERROR');
} else if (score >= 80 && score <= 100) {
    alert('A');
} else if (score >= 70 && score <= 79 ) {
    alert('B');
} else if (score >= 60 && score <= 69 ) {
    alert('C');
} else if (score >= 50 && score <= 59 ) {
    alert('D');
} else if (score >= 0 && score <= 49 ) {
    alert('F');
} else {
    alert('WRONG NUMBER');
}

/*

let score = Number(prompt('Enter your SCORE','80'));
let msg;

msg = score >= 80 && score <= 100 ? 'A' : score >= 70 && score <= 79 ? 'B' : score >= 60 && score <= 69 ? 'C' : score >= 50 && score <= 59 ? 'D' : score >= 0 && score <= 49 ? 'F' : 'WRONG NUMBER';
alert(msg);



if (score >= 80 && score <= 100) {
    alert('A');
} else if (score >= 70) {
    alert('B');
} else if (score >= 60) {
    alert('C');
} else if (score >= 50) {
    alert('D');
} else if (score >= 0) {
    alert('F');
} else {
    alert('WRONG NUMBER');
}


let score = Number(prompt('Enter your SCORE','80'));

if (score > 100 || score < 0 ) alert('WRONG NUMBER')
else if (score >= 80) alert('A');
else if (score >= 70) alert('B');
else if (score >= 60) alert('C');
else if (score >= 50) alert('D');
else alert('F');


*/
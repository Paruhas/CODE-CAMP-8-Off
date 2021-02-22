let p1 = prompt('ANSWER 1 - 100');
let pc;

while ( !!isNaN(p1) || p1 == '' || p1 == null ) {
    alert('p1 ไม่ถูกต้อง');
    pc = 1;
    p1 = prompt('ANSWER 1 - 100');
} 

while ( p1 > 100 ) {
    alert('p1 เกิน 100 ไม่ได้');
    pc = 1;
    break;
}

while ( p1 < 1 ) {
    alert('p1 น้อยกว่า 0 ไม่ได้');
    pc = 1;
    break;
}

while ( pc !== 1 && p1 >= 1 && p1 <= 100 ) {
    alert("test");
    break;
}

// while (p1 > 0 && p1 < 101) {
//     let p2 = prompt('GUEST 1-100');
//     if (p2 > 100) {
//         alert('p2 เกิน 100 ไม่ได้');
//     } else if (Number(p2) < 0) {
//         alert('p2 น้อย 0 ไม่ได้');
//     } 
// }

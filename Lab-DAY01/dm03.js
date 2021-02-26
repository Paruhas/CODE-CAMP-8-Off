// โจทย์ EX DAY 03

// ให้เขียนฟังก์ชัน changeStringtoThaiDate() โดยฟังก์ชันนี้จะรับค่าวันที่ที่เป็นแบบตัวเลข และ คืนค่ามาเป็นวันที่แบบไทย แต่ถ้าวันที่ผิดพลาดหรือเดือน(กุมภาพันธ์ไม่ต้องเช็ค Leap year)ผิดพลาดให้แสดงค่าว่า “Error” , ห้ามใช้ Date object[Date()]
// --------------------------------
// input: “12-11-1996”
// output: “วันที่ 12 เดือนพฤศจิกายน พ.ศ. 2539”
// ---------------------------------
// input: “31-11-2000”
// output: “Error”
// --------------------------------
// input: “12-13-1996”
// output: “Error”
// --------------------------------

// DD-MM-YYYY


function changeStringtoThaiDate(n) {
    console.log(n)

    //Split ตัวแปร n แล้วเช็ค format
    splN = n.split('')
    console.log(splN)

    if ( splN[2] != '-' || splN[5] != '-' ) {
        return 'Error'
    }

    //เอาที่ Split มาต่อกันในรูปแบบ วว ดด ปป
    dateN = splN[0] + splN[1]
    console.log(dateN)
    
    monthN = splN[3] + splN[4]
    console.log(monthN)

    yearN = splN[6] + splN[7] + splN[8] + splN[9]
    console.log(yearN)

    //แปลงปี คศ => พศ
    yearNTH = +yearN + 543
    console.log(yearNTH)

    //เงื่อนไขใส่วัน/เดือนผิด
    if ( dateN > 31 || dateN < 0 ) {
        return 'Error'
    }

    if ( monthN > 12 || monthN < 1 ) {
        return 'Error'
    }

    //เงื่อนไขวันในเดือนที่จะทำให้ Error
    if ( monthN == 02 && dateN > 28 ) {
        return 'Error'
    }

    if ( monthN == 04 && dateN > 30 ) {
        return 'Error'
    }

    
    if ( monthN == 06 && dateN > 30 ) {
        return 'Error'
    }

    
    if ( monthN == 09 && dateN > 30 ) {
        return 'Error'
    }

    if ( monthN == 11 && dateN > 30 ) {
        return 'Error'
    }

    //str เดือน
    if ( monthN == 01 ) {
        monthNstr = 'มกราคม'
    }

    if ( monthN == 02 ) {
        monthNstr = 'กุมภาพันธ์'
    }

    if ( monthN == 03 ) {
        monthNstr = 'มีนาคม'
    }

    if ( monthN == 04 ) {
        monthNstr = 'เมษายน'
    }

    if ( monthN == 05 ) {
        monthNstr = 'พฤษภาคม'
    }

    if ( monthN == 06 ) {
        monthNstr = 'มิถุนายน'
    }

    if ( monthN == 07 ) {
        monthNstr = 'กรกฎาคม'
    }

    if ( monthN == 08 ) {
        monthNstr = 'สิงหาคม'
    }

    if ( monthN == 09 ) {
        monthNstr = 'กันยายน'
    }

    if ( monthN == 10 ) {
        monthNstr = 'ตุลาคม'
    }

    if ( monthN == 11 ) {
        monthNstr = 'พฤศจิกายน'
    }

    if ( monthN == 12 ) {
        monthNstr = 'ธันวาคม'
    }

    //แปลงเป็นเลขไทย
    numberTH = ['๐','๑','๒','๓','๔','๕','๖','๗','๘','๙']

    dateForNumTH = dateN.split('')

    yearForNumTH = String(yearNTH).split('')

    console.log(dateForNumTH)
    console.log(yearForNumTH)

    // console.log(dateForNumTH.length)
    // console.log(yearForNumTH.length)

    //วันที่ เลขไทย
    dateForNumTH2 = []
    if (dateForNumTH[0] != 0) {
        dateForNumTH2.push(numberTH[dateForNumTH[0]])
        dateForNumTH2.push(numberTH[dateForNumTH[1]])
    } else {
        dateForNumTH2.push(numberTH[dateForNumTH[1]])
    }
    
    console.log(dateForNumTH2)

    dateForNumTH2J = dateForNumTH2.join('')

    console.log(dateForNumTH2J)

    //ปี เลขไทย
    yearForNumTH2 = []
    yearForNumTH2.push(numberTH[yearForNumTH[0]])
    yearForNumTH2.push(numberTH[yearForNumTH[1]])
    yearForNumTH2.push(numberTH[yearForNumTH[2]])
    yearForNumTH2.push(numberTH[yearForNumTH[3]])

    console.log(yearForNumTH2)

    yearForNumTH2J = yearForNumTH2.join('')

    console.log(yearForNumTH2J)

    // return 'วันที่ ' + dateN + ' เดือน' + monthNstr + ' พ.ศ. ' + yearNTH
    
    return 'วันที่ ' + dateForNumTH2J + ' เดือน' + monthNstr + ' พ.ศ. ' + yearForNumTH2J
}

console.log(changeStringtoThaiDate('12-11-1996'));
// console.log(changeStringtoThaiDate('31-11-1996'));
// console.log(changeStringtoThaiDate('12-13-1996'));
// console.log(changeStringtoThaiDate('12 13 1996'))
// console.log(changeStringtoThaiDate('2-2-1995'))

// //เฉลย
// let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

// function changeStringToThaiDate(date) {
//     let dateArr = date.split("-"),
//         [d, m, y] = dateArr;

//     let maxDate = checkMax(m)
//     return (Number(d) > maxDate || months[m - 1] === undefined) ? "error" : `${d} ${months[m - 1]} ${Number(y) + 543}`
// }

// function checkMax(month) {
//     let maxDay = (/คม$/.test(months[month - 1])) ? 31 : (/ยน$/.test(months[month - 1])) ? 30 : 28
//     return maxDay
// }

// console.log(changeStringToThaiDate("29-4-2020"))
// console.log(changeStringToThaiDate("31-11-2000"))
// console.log(changeStringToThaiDate("12-13-1996"))















// โจทย์ EX DAY 04

// ให้เขียนโปรแกรมที่รับค่า a และ b จาก prompt อย่างละครั้ง และให้เช็คว่า 
// a / b เป็นเศษส่วนอย่างต่ำไหม ถ้าเป็นให้แสดง alert(a / b) ออกมา ถ้าไม่เป็นเศษส่วนอย่างต่ำ ให้หาเศษส่วนอย่างต่ำของ a และ b ก่อน หลังจากนั้น alert(a / b) ที่เป็นเศษส่วนอย่างต่ำแล้วออกมา
// เช่น
// INPUT		⇒ a=5, b=7			INPUT		⇒ a=10, b=5
// OUTPUT	⇒ 5/7					OUTPUT	⇒ 2/1

// INPUT		⇒ a=30, b=30		INPUT		⇒ a=20, b=100
// OUTPUT	⇒ 1/1					OUTPUT	⇒ 1/5

// INPUT		⇒ a=18, b=4
// OUTPUT 	⇒	9/2	


function findAnswer(a, b) {
    // while ( a%2 == 0 && b%2 == 0 ) {
    //     a /= 2;
    //     b /= 2;
    // }
    // while ( a%3 == 0 && b%3 == 0 ) {
    //     a /= 3;
    //     b /= 3;
    // }
    // while ( a%5 == 0 && b%5 == 0 ) {
    //     a /= 5;
    //     b /= 5;
    // }
    // while ( a%7 == 0 && b%7 == 0 ) {
    //     a /= 7;
    //     b /= 7;
    // }
    // return a + '/' + b

    a_c = [];
    b_c = [];

    for ( i=0 ; i<=a ; i++ ) {
        if ( a%i == 0 ) {
            a_c.push(i);
        }
    }
    console.log(a_c)

    for ( i=0 ; i<=b ; i++ ) {
        if ( b%i == 0 ) {
            b_c.push(i);
        }
    }
    console.log(b_c);
    
    intersectNumber = a_c.filter(item => b_c.includes(item));

    console.log(intersectNumber);

    a = a / intersectNumber[intersectNumber.length-1]
    b = b / intersectNumber[intersectNumber.length-1]

    // for (i = 0 ; i < intersectNumber.length ; i++) {
    //     if ( a%intersectNumber[i] == 0 && b%intersectNumber[i] == 0 ) {
    //         a = a / intersectNumber[i];
    //         b = b / intersectNumber[i];
    //     }
    // }

    // for (i = 0 ; i < intersectNumber.length ; i++) {
    //     if ( a%intersectNumber[i] == 0 && b%intersectNumber[i] == 0 ) {
    //         a = a / intersectNumber[i];
    //         b = b / intersectNumber[i];
    //     }
    // }

    return a + '/' + b
    
}


// 1 2 7 14
// 1 7

console.log(findAnswer(5, 7));
console.log(findAnswer(10, 5));
console.log(findAnswer(20, 100));
console.log(findAnswer(100, 100));
console.log(findAnswer(18, 4));
console.log(findAnswer(35, 49));

console.log(findAnswer(50, 30));
console.log(findAnswer(10, 100));
console.log(findAnswer(20, 30));












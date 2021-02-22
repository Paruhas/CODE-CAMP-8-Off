// let fruitK;
// let fruitV;
// let Key_Value;

// while (1) {
//     const fruitK = prompt('Enter Key');
//     if ( fruitK === 'stop' || fruitK === 'Stop' ) break;
//     const fruitV = prompt('Enter Value');
//     if ( fruitV === 'stop' || fruitV === 'Stop' ) break;
//     if (fruitV > 1) fruitV+'s';
//     let Key_Value = {[fruitK] : [fruitV]};
// }

const Fobj = {};

// while (1) {
//     const name = prompt('Fruit Name');
//     if (name === 'stop') break;
//     const amount = prompt('Fruit Q');
//     if (amount === 'stop') break; 
//     Fobj[amount > 1 ? `${name}s` : name] = amount;
// }

while (1) {
    const name = prompt('Fruit Name');
    if (name === 'stop' || name === 'Stop' || name === null || name == ''  ) break;
    const amount = prompt('Fruit Q');
    if (amount === 'stop' || amount === 'Stop' || amount === null || amount == '' ) break;
    if (amount > 1) {
        Fobj[`${name}s`] = amount;
        } else {Fobj[name] = amount;
    }
}


console.log(Fobj);
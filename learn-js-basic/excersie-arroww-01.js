// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
  
/*
//ทำเอง

const ask = (question, yes, no) => confirm(question) ? yes() : no() ;

ask("Do you agree?", yes , no
yes = () => alert("You agreed."), 
no = () => alert("You canceled the execution.")
);

*/

// function yes() {
//     alert('Yes')
// }
// function no() {
//     alert('No')
// }

/*
//เฉลย

const ask = (question ,yes ,no) => {
    if (confirm(question)) yes();
    else no();
}

ask ('Do you agree?', () => alert('You agreed.') , () => alert('You canceled the execution.'))

*/
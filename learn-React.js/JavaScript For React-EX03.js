// let hamster = {
//     stomach: [],
  
//     eat(food) { 
//         this.stomach.push(food)
//         this.stomach.slice(food)
        
//     }
// };
  

// let lazy = {
//     stomach: [],
//     __proto__: hamster,
// };
    
// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };
//   // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
// //   lazy.eat("apple");
// lazy.eat('ตีน')
// alert( lazy.stomach ); // apple


let hamster = {
  stomach: [],

  eat(food) { 
      this.stomach = [food]
  }
};


let lazy = {
  // stomach: [],
  __proto__: hamster,
};
  
let speedy = {
  // stomach: [],
  __proto__: hamster
};
// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
//   lazy.eat("apple");
lazy.eat('ตีน')
alert( lazy.stomach ); // apple
/*
let calculator = {
    a: prompt('Enter First Number',''),
    b: prompt('Enter Second Number',''),
    read: function() {
        return this.a + ' ' + this.b
    },
    sum: function() {
        realSum = +this.a + +this.b
        return 'result of + is ' + realSum
    },
    mul: function() {
        return 'result of * is ' + this.a * this.b
    }
  };
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/ 

let calculator = {
    read: function() {
        calculator.a = +prompt('Enter First Number','');
        calculator.b = +prompt('Enter Second Number','');
    },
    sum: function() {
        realSum = this.a + this.b;
        return 'result of + is ' + realSum
    },
    mul: function() {
        return 'result of * is ' + this.a * this.b
    }
  };
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
      ladder.step++;
    //   return ladder
        return this
    },
    down() {
      this.step--;
    //   return ladder
        return this
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    }
  };

// // ladder.up()
// // ladder.down()
// // ladder.showStep()
// // ladder.up().up().down().showStep();
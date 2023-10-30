// var inc;
// inc(); // => TypeError: inc is not a function
// inc = function() {
//   console.log(`function inc run`);
// }
// console.log(`function inc: `, typeof inc);

// x = 3.14;       // work
// "use strict";

// "use strict";
// x = 3.14;       // This will cause an error

// class Person {
//   getName() {
//     console.log(`bar class: `, bar);
//   }
// }

// console.log(`bar 2: `, bar);

// var p1 = new Person()
// p1.getName()

// console.log(`bar: `, bar);
// bar = 10;

// getName();
// let getName = function () {
//   let bar = 10;
//   console.log(`bar: ${bar}`, bar);
// };

// function add() {
//   let step = 1;

//   function pow(step) {
//     return step * step;
//   }

//   return {
//     getStep: () => {
//       step = step + 1;
//       console.log(`step: ${step}`, step);
//       return step;
//     },
//   };
// }

// let bar = add();
// bar.getStep();
// bar.getStep();

var firstName = 'Jonh';
console.log(`firstName: `, window.firstName); // => firstName: Jonh


// {
//   // TDZ starts at beginning of scope
//   const getFood = () => console.log(food); // OK
//   const getFruit = () => console.log(fruit); // OK

//   // Within the TDZ letVar access throws `ReferenceError`

//   let food = 'beef';
//   let fruit = 'orange';
//   // End of TDZ (for letVar)
//   getFood(); // Called outside TDZ!
//   getFruit(); // Called outside TDZ!
// }


// console.log(`bar(): `, bar());
// bar()

// console.log(`foo: `, foo);
// const  foo = 10;

// console.log(`bar: `, bar);

// var bar = 10;

// inc()

// console.log(`bar: ${bar}`, bar);

// console.log(`bar: ${bar}`, bar);

// {
//   console.log(`bar: `, bar);
// }
// var bar = 10;

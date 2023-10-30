/*
 * assign a primitive value to a variable
 */
// var daughter = 4;
// var son = daughter; // 2 year later, my son has the same age as my daughter
// daughter = 6; // now she is 6
// console.log(`son: ${son}`); // => 4
// console.log(`daughter: ${daughter}`); // => 6

/*
 * assigne an object to an object
 * This code still works
 * but... something's weird
 */
// let buildingA = { floor: 5 };
// let buildingB = buildingA;
// buildingA.floor = 35;
// var buildingC = { floor: 35 };
// console.log(`buildingA vs buildingB: ${buildingA === buildingB}`); // true
// console.log(`buildingA vs buildingC: ${buildingA === buildingC}`); // false
// console.log(`buildingB vs buildingC: ${buildingB === buildingC}`); // false

// let carName = 'toyota';
// carName = 'BWM';

// console.log(`'Toyota'.length: ${'Toyota'.length}`);
//
// let carName = String('Toyota');
// console.log(`carName: ${'Toyota'.length}`);

// car is update to 'BWM'. 'toyota' is replace by 'BWM'
// It's new value.

// let carName = String('Toyota') // String wrapper object
// console.log(`carName length: ${carName.length}`); // => 6
// console.log(`Toyota.length: ${'Toyota'.length}`); // => 6

// let foo = [1, 2, 3];
// let bar = foo;
// foo.push(4);
// console.log(`bar: ${bar}`); // "bar: 1,2,3,4"

// var userName = 'joshua';
// function getUserName(userName) {
//   userName = 'Noah'
//   console.log(`userName: ${userName}`);
// }

// getUserName(userName)
// console.log(`userName: ${userName}`);

// let userInfo = {
//   name: 'halland',
//   age: 20
// }
// const getUserInfo =  function (user) {
//   user.age = 21
//   console.log(`userInfo in function: `, user);
//   console.log(`userName: ${JSON.stringify(user)}`);
// }
// getUserInfo(userInfo)
// console.log(`userInfo: `, userInfo);


// var foo = 1;
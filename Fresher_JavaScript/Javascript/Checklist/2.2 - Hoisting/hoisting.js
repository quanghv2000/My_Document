// Hoisting

/**
 * var
 * Hoisting: Yes - Declaration, Initialization Phase
 */

/**
 * let, const
 * Hoisting: Yes - Declaration Phase: RefenrenceError => Temporal Dead Zone
 */

/**
 * function
 * Hoisting: Yes - Declaration, Initialization, Assignment Phase => function is invoked
 */

console.log(age); // undefined
console.log(fullName); // Error: fullName is not defined

var age = 16;

console.log(6, 9); // 15

// Declaration function
function sum(a, b) {
  return a + b;
}

console.log(myLet); // Cannot access 'myLet' before initialization
console.log(myConst); //Cannot access 'myConst' before initialization

// "Temporal Dead Zone"
let myLet = "my let";
const myConst = "my const";

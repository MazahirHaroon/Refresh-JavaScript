'use strict';
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user2 = makeUser();

// console.log(user2.ref.name); // Cannot read properties of undefined (reading 'name')

/*
For this, what matter is how it called and not defined. 
Here the this was called inside the function and not a method, 
so this will be either "undefined" in strict mode or
- Browser: window
- Node: Global
*/

// ----

/* How to Fix It?
Instead of assigning this directly, use a method (ref() instead of ref: this) 
so this is evaluated at call-time.
*/

function makeUserFixed() {
  return {
    name: 'John',
    ref() {
      return this; // Now `this` is evaluated at call-time
    },
  };
}

let userFixed = makeUserFixed();

console.log(userFixed.ref().name); // John

/*
Key Takeaways
- Functions don't "capture" this at definition time – this is determined when the function is called.
- If this is used inside a regular function, it defaults to undefined (strict mode) or window (non-strict mode).
*/

let int = parseInt("45abc"); //45
let float = parseFloat("45.56abc"); //45.56
let int2 = parseInt("45abc123"); // 45

console.log("45abc = " + int + " when parsed");
console.log("45.56abc = " + float + " when parsed");
console.log("45abc123 = " + int2 + " when parsed");

/* Converting from a different number system to the familiar base-10 system using parseInt..
   Converting hexidecimal (base-16) value 'a7' to (base-10)
*/

console.log(parseInt("a7", 16));

/* Using Number() to convert any value to a number according to that value's conversion rules. The more striaghtforward rules include: */

console.log(Number(false)); // 0
console.log(Number(true)); // 1

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Number("")); // 0
console.log(Number("TEST")); // NaN

// Number() vs parseInt()

console.log(Number("20px")); // NaN
console.log(parseInt("20px")); // 20

// Big difference between the two is Number is used for converting DataTypes except Strings that contain anything other then a numeric value, basically if a string doesn't look like a number, using Number will give you a NaN

console.log(parseInt(true)); // NaN

console.log(Number(true)); // 1

console.log(parseInt("1")); // 1

console.log(Number("1")); // 1

console.log(Number("a")); // NaN

console.log(Number("1a")); // NaN

// Last but obvious is if you pass a floating point literial to parseInt() you will get a Integer returned where is Number() will return a floating point literial.

console.log(Number("15.15")); // 15.15
console.log(Number(15.15)); // 15.15

console.log(parseInt("15.15")); // 15
console.log(parseInt(15.15)); // 15

// Number() conerces any value to a number eg (String, boolean, object, etc)
// parseInt() on the other hand expects a string input (if its not a string, its converted to a string first).

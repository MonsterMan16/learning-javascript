/*
  Write a JavaScript program to get the integers in
  range (x, y). Pass the values into a function and
  return the result
*/

function range(num1, num2) {
  let i = num1 + 1;
  while (i < num2) {
    console.log(i);
    i++;
  }
}

range(2, 9);

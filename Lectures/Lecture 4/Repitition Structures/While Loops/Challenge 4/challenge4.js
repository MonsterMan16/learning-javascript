/*
  Write a JavaScript program to calculate the factorial of a number. The factorial of a non-negative integer n,
  is donated by n!, is the product of all positive integers less than or equal to n
*/

function factorial(num) {
  let i = num - 1;
  let factorial = num;
  while (i > 0) {
    factorial *= i;
    i--;
  }
  console.log(factorial);
}

factorial(5);

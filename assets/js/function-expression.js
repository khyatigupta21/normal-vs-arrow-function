var aa = 20;
addition(2, 4); //Prints 6

//Function declaration
function addition(a, b) {
  console.log(a + b);
}

//Function expression

// multiply(3, 4); //Prints 12

var multiply = function (x, y) {
  console.log(x * y);
};

//arrow function
let sum = (a, b) => a + b;

//function expression

let minus = function (a, b) {
  return a - b;
};

alert(sum(3, 4));
alert(minus(6, 2));

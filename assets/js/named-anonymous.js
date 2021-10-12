// Named function

var namedSum = function sum(a, b) {
  console.log("Named Sum is:", a + b);
};

//Anonymous function
var anonSum = function (a, b) {
  console.log("Anonymous Sum is:", a + b);
};

namedSum(1, 4); // output 5
anonSum(4, 1); // output 5

//named and anonymous both set their name property

//anonymous function
var x = function () {
  console.log("Anonymous function", x.name);
};
//Function declaration
function abc() {
  console.log("Function declaration", abc.name);
}
//Function expression

var y = function xyz() {
  console.log("Function expression", y.name);
};

x();
abc();
y();

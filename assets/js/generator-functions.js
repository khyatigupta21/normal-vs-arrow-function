//Generator Function
function* generatorFunction() {
  console.log("Before 1");

  yield 1;
  console.log("After 1");
  console.log("Before 2");

  yield 2;
  console.log("After 2");
  console.log("Before 3");

  yield 3;
  console.log("After 3");
}

const generatorObject = generatorFunction(); //creating generator function object

const generatorObject2 = generatorFunction(); //creating another generator function object2

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

//Generate ID's

// function* generateId() {
//   let index = 1;
//   while (true) {
//     yield index;
//     index++;
//   }
// }

//Generate ID's

function* generateId() {
  let index = 1;
  while (true) {
    const increment = yield index;
    if (increment != null) {
      index += increment;
    } else {
      index++;
    }
  }
}

const generateIdObject = generateId();
console.log(generateIdObject.next());
console.log(generateIdObject.next());
console.log(generateIdObject.next(5));
console.log(generateIdObject.next());

// while (generateIdObject.next().done !== false) {
//   console.log("I am inside while loop");
// }

// const generateIdObject2 = generateId();
// console.log(generateIdObject2.next());
// console.log(generateIdObject2.next());
// console.log(generateIdObject2.next());

// function generatorFunction() {
// function declaration
//   console.log("Before pause");
//   yield "Hello";

//   console.log("After pause");
//   yield "World!";
// }

// const generatorObject = generatorFunction(); //calling generator function

// console.log(generatorObject.next().value);

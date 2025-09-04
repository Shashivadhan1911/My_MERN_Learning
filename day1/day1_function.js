//function scoped and block scoped behavior

if (true) {
  var n = 30;
  let x = 50;
  console.log("inside if block: ", n);
  console.log("inside if block: ", x);
  var n = 40; //re-declaring and re-assigning
  console.log("inside if block after re-assigning: ", n);
}
console.log("outside if block: ", n);
// console.log("outside if block: ",x);//error: x is not defined

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array
console.log("num: ", number);
//typeof operator
console.log("type of num: ", typeof number); //object
console.log("length of num: ", number.length);

const double = number.map((num) => num * 2); //map() method
console.log("map() method: ", double);
//creates a new array with the results of calling a provided function on every element in the calling array.

const even = number.filter((num) => num % 2 === 0); //filter() method
console.log("filter() method: ", even);
//creates a new array with all elements that pass the test implemented by the provided function.

const sum = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); //reduce() method
console.log("reduce() method: ", sum);
//executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

//function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Shashivadhan"));

//arrow function
const greetArrow = (n) => {
  console.log("Inside arrow function", n);
  return "Hello " + n;
};
const arrowfun = (n) => "Hello " + n; //if only one statement is there we can skip {}
console.log(arrowfun("Arrow function"));
console.log(greetArrow(10));

//function expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 6));
//ES6 features
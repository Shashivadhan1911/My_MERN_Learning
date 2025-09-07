//data types
// primitive data types
// - number
// - string
// - boolean
// - null
// - undefined
// - symbol (ES6)
// - bigint (ES11)

// non-primitive data types
// - object
// - array
// - function
// - date

//data type examples
//primitive data types
let num = 10; //number
console.log(num);
console.log(typeof num); //type of operator
let str = "Hello World"; //string
console.log(str);
console.log(typeof str);
let bool = true; //boolean
console.log(bool);
console.log(typeof bool);
let var_nul = null; //null
console.log(var_nul);
console.log(typeof var_nul); //object (bug in js)
let var_undef = undefined; //undefined
console.log(var_undef);
console.log(typeof var_undef);
let sym = Symbol("sym"); //symbol
console.log(sym);
console.log(typeof sym);
let bigInt = BigInt(9007199254740991); //bigint
console.log(bigInt);
console.log(typeof bigInt);

//non-primitive data types
let obj = { name: "John", age: 30 }; //object
console.log(obj);
console.log(typeof obj);

let arr = [1, 2, 3, 4, 5]; //array
console.log(arr);
console.log(typeof arr); //object

let func = function () {
  return "Hello";
}; //function
console.log(func);
console.log(typeof func); //function

let date = new Date(); //date
console.log(date);
console.log(typeof date); //object
//date methods
console.log("Date: ", date.getDate());
console.log("Month: ", date.getMonth() + 1); //month is 0-indexed
console.log("Year: ", date.getFullYear());
console.log("Hours: ", date.getHours());
console.log("Minutes: ", date.getMinutes());
console.log("Seconds: ", date.getSeconds());    
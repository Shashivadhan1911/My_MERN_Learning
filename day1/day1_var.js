//high level interpreted language
//object oriented language
//loosely typed language
//case sensitive language
//multi paradigm language
//cross platform language
//lightweight language 

//write to html
document.writeln("Hello World!");
//write to console
console.log("Hello World");

//data types
// var keyword
// - used to declare a variable
// - can be re-declared
// - can be updated(re-assigned)
// - function scoped
var a=10
console.log(a);
var a="hello"
console.log(a);
var a=true
console.log(a);


// let keyword
// - used to declare a variable
// - cannot be re-declared
// - can be updated(re-assigned)
// - block scoped

//let a=20 //error: Identifier 'a' has already been declared
let b=20
console.log(b);
// let b="hello" //error: Identifier 'b' has already been declared
b=true
console.log(b);
// can be updated(re-assigned)

// const keyword
// - used to declare a variable
// - cannot be re-declared  
// - cannot be updated(re-assigned)
// - block scoped
// const a=30 //error: Identifier 'a' has already been declared
const c=30
console.log(c);
// const c="hello" //error: Identifier 'c' has already been declared
// c=true //error: Assignment to constant variable.
// cannot be updated(re-assigned)
// const d; //error: Missing initializer in const declaration
    
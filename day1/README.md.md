# JavaScript Fundamentals - Day 1

Welcome to my MERN stack learning journey! This repository contains my Day 1 exploration of JavaScript fundamentals.

## 🎯 Learning Objectives

Understanding the core concepts of JavaScript as a foundation for MERN stack development.

## 📚 Topics Covered

### JavaScript Characteristics
- **High-level interpreted language** - No need for compilation
- **Object-oriented language** - Supports OOP paradigms
- **Loosely typed language** - Dynamic typing system
- **Case sensitive language** - Variables `myVar` and `myvar` are different
- **Multi-paradigm language** - Supports procedural, OOP, and functional programming
- **Cross-platform language** - Runs on browsers, servers (Node.js), mobile apps
- **Lightweight language** - Minimal memory footprint

### Variable Declarations

#### `var` keyword
- ✅ Can be re-declared
- ✅ Can be updated/re-assigned
- 🔍 Function scoped
- ⚠️ Hoisted (can lead to unexpected behavior)

#### `let` keyword
- ❌ Cannot be re-declared
- ✅ Can be updated/re-assigned
- 🔍 Block scoped
- ✅ Modern ES6+ standard

#### `const` keyword
- ❌ Cannot be re-declared
- ❌ Cannot be updated/re-assigned
- 🔍 Block scoped
- ✅ Must be initialized at declaration

### Data Types

#### Primitive Types
- **Number** - `let num = 10`
- **String** - `let str = "Hello World"`
- **Boolean** - `let bool = true`
- **Null** - `let nullVar = null` (Note: `typeof null` returns "object" - known JS quirk)
- **Undefined** - `let undefinedVar = undefined`
- **Symbol** - `let sym = Symbol("sym")` (ES6)
- **BigInt** - `let bigInt = BigInt(9007199254740991)` (ES11)

#### Non-Primitive Types
- **Object** - `let obj = {name: "John", age: 30}`
- **Array** - `let arr = [1, 2, 3, 4, 5]` (Note: `typeof array` returns "object")
- **Function** - `let func = function(){return "Hello"}`
- **Date** - `let date = new Date()`

### Control Statements

#### Conditional Statements
- `if`, `if-else`, `else if`
- `switch` statements with `break` and `default`

#### Loops
- **For loop** - `for (let i = 0; i < 5; i++)`
- **While loop** - `while (condition)`
- **Do-while loop** - `do { } while (condition)`

### Scope Concepts

Understanding the difference between:
- **Function scope** (`var` keyword)
- **Block scope** (`let` and `const` keywords)

### Array Methods (Higher-Order Functions)

#### `map()` method
Creates a new array with results of calling a function on every element.
```javascript
const double = numbers.map(num => num * 2);
```

#### `filter()` method
Creates a new array with elements that pass a test function.
```javascript
const even = numbers.filter(num => num % 2 === 0);
```

#### `reduce()` method
Executes a reducer function on each element, resulting in a single output value.
```javascript
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

### Functions

#### Traditional Function Declaration
```javascript
function greet(name) {
    return "Hello " + name;
}
```

#### Arrow Functions (ES6)
```javascript
const greetArrow = (name) => {
    return "Hello " + name;
};

// Shorthand for single expression
const greetShort = (name) => "Hello " + name;
```

#### Function Expressions
```javascript
const multiply = function(a, b) {
    return a * b;
};
```

### ES6+ Features

#### Object Destructuring
Extracting properties from objects and assigning them to variables.
```javascript
const person = { name: "Ken Kaneki", age: 21, city: "Tokyo" };
const { name, age, city } = person;
```

## 🔧 Code Examples

All the code examples demonstrating these concepts can be found in the main JavaScript file. Each section includes:
- Practical examples
- Console outputs
- Type checking using `typeof` operator

## 🚀 Key Takeaways

1. **Variable Declaration Best Practices**: Use `const` by default, `let` when reassignment is needed, avoid `var`
2. **Scope Awareness**: Understanding block vs function scope prevents bugs
3. **Data Type Understanding**: Know the difference between primitive and non-primitive types
4. **Modern JavaScript**: ES6+ features like arrow functions and destructuring make code cleaner
5. **Array Methods**: Higher-order functions like `map()`, `filter()`, and `reduce()` are powerful tools for array manipulation

## 📝 Notes

- `typeof null` returns "object" - this is a known JavaScript quirk
- Arrays are technically objects in JavaScript
- Always use `===` for strict equality comparison
- Arrow functions don't have their own `this` context

## 🔗 Next Steps

- Learn about JavaScript objects and prototypes
- Explore asynchronous JavaScript (Promises, async/await)
- Study DOM manipulation
- Move towards React fundamentals

---

*Part of my MERN Stack Learning Journey* 🚀
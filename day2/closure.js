document.getElementById("sp").innerHTML = "hello from js";


// Closure
// A closure is a function that remembers its outer variables and can access them.
// In JavaScript, closures are created every time a function is created, at function creation time.
function outer() {
    var count = 0;
    return function inner() {
        count++;
        return count;
    }
}

var fn = outer();
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(typeof(fn));
console.log(typeof(outer));
console.log(typeof(inner)); // inner is not defined

function external(name,callback){
    console.log("Hello "+name);
    console.log(name.split('').reverse().join(''));
    callback();
}

function sendoff(){
    console.log("Goodbye");
}

external("Ken Kaneki",sendoff);
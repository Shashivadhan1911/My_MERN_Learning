//object destructuring
//extracting properties from an object and assigning them to variables
const person = {
  name: "Ken Kaneki",
  myage: 21,
  city: "Tokyo",
};
console.log(person.name, person.myage, person.city);
//syntax: const {property1, property2} = object;
const { name, myage, city } = person;
console.log(name, myage, city); //undefined undefined undefined

x = {
  id: 100,
  name: "world",
  address: "WGL",
}; //x={} can be empty at first
// document.writeln(x + "<br>"); //object
// document.writeln(x.id + "<br>");
// document.writeln(x.name + "<br>");
// document.writeln(x.address + "<br>");

//add in object
x.marks = 120;
// document.writeln(x.marks + "<br>-----------------------<br>");

y = {};
y.stdid = 12319;
y.marks = 92;
y.grade = "A";
// document.writeln("Student : " + y.stdid + "<br>");
// document.writeln("marks : " + y.marks + "<br>");
// document.writeln("Grade : " + y.grade + "<br>");

//delete in object
delete y.grade;
// document.writeln("after deletion grade : " + y.grade + "<br>");

//using function

var z = {
  id: 20190,
  fname: "KEN",
  lname: "KANEKI",
  fun: function () {
    return this.fname + this.lname;
  },
};
// document.writeln("<br>-----------------------------<br>");
// document.writeln(z.id + "<br>");
// document.writeln(z.fun());
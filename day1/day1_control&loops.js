//control statements
// - if
// - if-else
// - switch
// - for
// - while
// - do-while
// - break
// - continue

let age = 18;
if (age < 18) {
  //if-else
  console.log("Minor");
  m = "Minor";
} else if (age >= 18 && age < 60) {
  console.log("Adult");
  m = "Adult";
} else {
  console.log("Senior Citizen");
  m = "Senior Citizen";
}

switch (
  m //switch
) {
  case "Minor":
    console.log("You are a Minor");
    break;
  case "Adult":
    console.log("You are an Adult");
    break;
  case "Senior Citizen":
    console.log("You are a Senior Citizen");
    break;
  default:
    console.log("Invalid age");
}

//loops
// for loop
console.log("for loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop
console.log("while loop");
let j = 0;
while (j > -5) {
  console.log(j);
  j--;
}
// do-while loop
console.log("do-while loop");
do {
    if (j == -2){
    continue; //skip the iteration
    }
  console.log(j);
  j++;
} while (j < 1);
// break and continue
console.log("break and continue");  
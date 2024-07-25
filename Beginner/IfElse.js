let a = prompt("Hey, What's your age?");
a = Number.parseInt(a);
if (a <= 12) {
  alert("You cannot Drive a Car!");
} else if (a <= 10) {
  alert("You canot even think of Driving a Car.");
} else if (a >= 18 && a <= 25) {
  alert("You are fully allowed of Driving a car!");
}
// Use of Bitwise Operator
a > 18 ? "You can Drive a car now!" : "You cannot Drive a car now!";
/* Check Modulus */
let num = prompt("Enter Your Age?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your age is Divisible by 2 and 3");
} else {
  console.log("Your Age is not Divisible by 2 and 3");
}

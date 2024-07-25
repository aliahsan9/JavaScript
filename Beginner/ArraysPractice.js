//Question no. 01
//Add a new element into an array 
let arr1 = [1, 2, 3, 4, 5];
let a = prompt("Enter a new Number:");
a =Number.parseInt(a);
arr1.push(a);
console.log(arr1);

//Question No.02
// Keep adding numbers in an array until the 0 is added in an aray
let arr2 = [1, 2, 3, 4];
let a2;
do{
     a2 = prompt("Enter the array Elements:");
    a2 = Number.parseInt(a2);
    arr2.push(a2);
}while(a2!=0);
console.log(arr2);

// Question Node. 03
// Use Filter Method to print the multiples of 10
let arr3 = [10, 34, 40, 440];
let n3 = arr3.filter((x)=>{
return x%10 ==0;
})
console.log(n3);

//Question No. 04
// Return the square of array elements
let arr4 = [2, 3, 4, 5];
let n4 = arr4.map((x)=>{
    return x*x;
})
console.log(n4);

//Question No. 05 
// Reduce Method
let arr4 = [2, 3, 4, 5]; //This mathod will multiply the array elements together
let n4 = arr4.reduce((x1 , x2)=>{
    return x1*x2;
})
console.log(n4);

//A random number guessed game as a practice
let number = 76;
let chances = 100;
let n = parseInt(prompt("Enter a Number you guessed?"));
let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);
if(randomNumber === n){
    console.log("You have guessed a correct number.");
}else{
    console.log("Your guessed number is incorrect!!!");
}

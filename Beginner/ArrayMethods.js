//Use of Arrays in strings
let num = [2, 4, 6, 9, 5];
console.log("Arrays separated with commas are:", num.toString()); //Converts an array to a string whose eleemnts are separated with commas
console.log("Arrays separated with commas are:",num.join()); //This property will joins all the string elements using separator like Comma
console.log("After Removing Last Element:", num.pop()); //This property Removes the last Element from the list
console.log("After pushing an Element:", num.push(7)); //This property will adds a new Element at the end of an array
console.log("After removing first Element:", num.shift()); //Removes the First Element from an array
console.log("Adding first element:", num.unshift()); //Adds a First Element in an array
delete[0]; //Deleting process
console.log("After deleting an element:", num); //Returns true if the number could be delete from an array
let a1 = [2, 3, 4];
let a2 = [1, 9, 8];
let a3 = [5, 6, 7];
console.log("Arrays after concating are:", a1. concat(a2, a3)); //Concat Method to connect two or more Arrays together
let num1 = [6, 8, 3, 2, 7];
console.log("Sort array elements are:", num1. sort()); //This Sorting Method of an Array will make the eleements of an array in an alphabetically order*
let number = [1, 2, 3, 4];
console.log("Elements after given element are:", number.slice(2, 4)); //Slice will print the elements in an array after slice bracket digits
console.log("Elements after given element are:",number.splice(1));  //Removes the eleemnts from an array which we want to remove 
console.log("After reversing the array elements are:", number.reverse()); //This Method Reverses the eleemnts in an array
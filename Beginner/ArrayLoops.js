//Use of for-Each loop
let num = [2, 3, 4, 5, 6];
//Use of for loop
for(let i=0;i<num.length;i++){
    console.log (num[i]); //for loop will prints the array elements same to same as Given
}
//Use of forEach loop instead of for loop but same functioning 
num.forEach((Element)=>{
console.log(Element*Element)
}) //This property will calls each element from an array one time and it will return the square of each element

let Name = "Ahsan";
let arr = Array. from(Name); //Used to create an array from many objects
console.log(Array);
//Use of for...of loop
for (i of num){
    console.log(i); //Prints the eleements of given array
}
//Use of fo...in loop
for(i in num){
    console.log(i); //Prints the indexes of the Given array
}

//Use of  Map
let num1 = [2, 3, 5, 6, 7];
let a = num1.map((value, index, array)=>{ //Map will creates a new array by performing some operations on it
console.log(value, index, array)
return value+1;
})
console.log(num1);
let num2 = [1, 2, 3, 40, 15];
let num3 = num2.filter((num2)=>{ //it will print the array eleemnts if the condition will be true
    return num2<10;
})
console.log(num3);
//Use of Reduce Method
let num4 = [1, 2, 3, 4, 5, 1, 2];
let num5 = num4.reduce((h1 , h2)=>{ //This method will return the sum of the elements given in an array
return h1+h2;
})
console.log(num5);
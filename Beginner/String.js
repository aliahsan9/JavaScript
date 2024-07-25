// Use of String
let fullname = "Ali Ahsan";
console.log("Value at index 6 is:", fullname[6]); //Taking index of String
console.log("Total Length of String is:", fullname.length); //Checking the length of the String
console.log(
  "Letters after index 2 and before index 4 are:",
  fullname.slice(2, 7)
); //Printing letters using slice after 2 and till 7
console.log("Letters after an index 2 are:", fullname.slice(2)); //Printing full name after Slice 2
let Name = "Ali Ahsan";
console.log("Name after replacing is: ", Name.replace("Ahsan", "Ahsan Bhai")); //Replacing the Name Ali With Ahsan
console.log(
  "Name in Upper case letters is:",
  fullname.toLowerCase("Ali Ahsan")
); //Converting the Letters to LowerCase
console.log(
  "Name in Lower case Letters is:",
  fullname.toUpperCase("Ali Ahsan")
); //Converting the Letters to to Uppercase
let name1 = "Ahmad";
let name2 = " Shahzad";
console.log("Name after Concating is:", name1.concat(name2)); //Two Names will be Connected together
let myName = "       Hamza";
console.log("Name before trim property is:", myName);
console.log("Name after trim property is:", myName.trim()); //This Property will prints the value after removing whitespaces
let studentName = "Aslam";
console.log("Value at Given index is:", studentName.charAt(3)); //Value at Given index
let text = "Hello, World! ";
console.log("Value after Repeaing is:", text.repeat(5)); //Use of Repeat property to repeat the string
let Text =
  "I love cats. People also love Dogs. Dogs are very popular as a pets.";
console.log("Text after replacing all is:", Text.replaceAll("cats", "Dogs")); //Use the ReplaceAll Method to Replace all strings we want
let array = "a, b, c, d, e";
console.log("Arrays after Using Array property is:", array.split("e")); //Use of Arrays in the String

let Newtext = "Please locate where 'locate' occurs!"; //Use the String indexof property to locate the index of the string
console.log(
  "Value of String after indexof property is:",
  Newtext.indexOf("locate")
); //It will give the index till before the string given element
let myNewtext = "Please locate where 'locate' occurs!"; //Use the String Lastindexof property to locate the index of the string
console.log(
  "Value of String after Lastindexof property is:",
  myNewtext.lastIndexOf("locate")
); //It will give the index of the string's second occurence the string given element

let thistext = "Please locate where 'locate' occurs!";
console.log(
  "Index of String Element before starting:",
  thistext.search("locate")
); //It willl prints the index of whitespace before the String Element is started

// let stringtext = "The rain in SPAIN stays mainly in the plain";
// console.log(stringtext.match("ain"));

let sentence = "Hello world, how are you?";
console.log("The given Value is:", sentence.includes("world")); // it willl prints true if given value is present in string atherwise false

let newSentence = "Hello world, welcome to the universe.";
console.log("String starts with word:", newSentence.startsWith("Hello")); //Prints true if starts with given element otherwise false

console.log("String Ends with word:", newSentence.endsWith("Hello")); //Prints true if Ends with given element otherwise false
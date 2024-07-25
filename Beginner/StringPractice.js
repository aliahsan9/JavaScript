// Pratice Set of Chapter number 04
// Question Node. 01:
let a = "Ahsan\"";
console.log(a.length);

//Question no.2:
let newSentence = "Hello world, welcome to the universe.";
console.log("String starts with word:", newSentence.startsWith("Hello")); //Prints true if starts with given element otherwise false

console.log("String Ends with word:", newSentence.endsWith("Hello")); //Prints true if Ends with given element otherwise false
//Question No.3:
// Prints any String to Lowercase
let text = "HASSAN IS A GOOD BOWLER.";
console.log("String is Lower Case is:", text.toLowerCase());

// Question No. 4:
// Extract Amount out of given  String 
let string = "Please give me RS. 20000";
console.log("String after extraction is:",(string.slice(15)));
console.log("String after extraction is:",typeof (string.slice(15))); //Also Check its Type

//Question No. 04:
let friend = "Ahsan";
friend [3]="r";   
console.log(friend); //The Letters of the String will not be Changed because Strings are immutable
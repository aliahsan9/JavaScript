// Use of Objects
let marks = {
 Ali : 90,
 Ahsan : 80,
 Ahmad : 70,
Aslam : 60,

}
for( let i=0; i< Object. keys(marks).length; i++){
    console.log ("The Marks of " + Object.keys(marks)[i] + " are " + marks [Object. keys(marks) [i]])
}

// Use of for in 
for(let key in marks){
    console.log("The Markks of " + key + " are " + marks[key]);
}
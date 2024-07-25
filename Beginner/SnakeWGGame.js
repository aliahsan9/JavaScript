//This is Snake, Water and Gun Game 
const snake = "snake";
const water = "water";
const gun = "gun";
let choice = prompt("Enter one of your choice:");
if(choice == snake){
  alert("Water is a Winner.");
}else{
    if(choice == water){
        alert("Gun is a Winner.");
    }else{
        if(choice == gun){
        alert("Snake is a Winner.");
        }else {
            alert("Invalid choice. Please enter snake, water, or gun.");
          }
    }
}

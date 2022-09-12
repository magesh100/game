function startGame(){
let array = ["paper","scissor","rock"];
cc = array[Math.floor(Math.random()*array.length)];
input = prompt("Enter Your Choice");
uc = input;
if(cc =="rock" && uc=="paper"){
  alert("You Won");
}
else if (cc == "paper" &&  uc == "paper") {
  alert("tie");
}
else if (cc == "rock" &&  uc == "rock") {
  alert("tie");
}
else if (cc == "scissor" &&  uc == "scissor") {
  alert("tie");
}
else if (cc =="rock" &&  uc =="scissor") {
  alert("computer won");
}
else if ( cc  =="paper"  &&  uc =="rock") {
  alert("computer won"); 
}
else if ( cc == "paper" &&  uc == "scissor") {
  alert("You won");
}
else if ( cc == "scissor" && uc == "rock"){
  alert("you won");
}
else if ( cc = "scissor"  &&  uc == "paper") {
  alert("computer won");
}

else {
alert("Please provide a valid input!");
}
}



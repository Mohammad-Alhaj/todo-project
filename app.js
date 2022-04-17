'use strict';



var Name =prompt("please enter his/her name");


var gender =prompt("please enter his/her gender");



var age =prompt("please enter his/her age");

if (age<=0) {
    alert("The age it's not could be less than or equal to zero")
}


var toShow_WM =confirm("Do you want to go to welcoming message?")//WM=welcoming message



if (toShow_WM==1) {


if (gender==="male") {
var A=console.log("Mr "+Name);
   alert('Hi! ' +'Mr ' +Name);
}
else if (gender==="femal") {
    alert('Hi! ' +'Ms '+Name);
}
else if ((gender!="femal")||gender==="male") {
    alert ("HI!"); 
}
 
 
}

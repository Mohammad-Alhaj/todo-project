'use strict';



var Name =prompt("pleaes enter his/her name");


var gender =prompt("pleaes enter his/her gender");



var age =prompt("pleaes enter his/her age");

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

//.............2...............................................

let questionOne =()=>
{
   let answerOne =prompt("Are you familiar with any programming language?");
  
   if (answerOne===null) {
       alert("invalid!");
      
   }
   console.log(answerOne);
}

let questionTow =(x)=>
{
   let answerTow= prompt("Do you have any background about It?");
if (answerTow===null) {
    alert("invalid!");
    
}
console.log(answerTow);
}

let questionThree =()=>
{
   let answerThree= prompt("Are you sure for learning JS?");
if (answerThree===null) {
    alert("invalid!");
}
console.log(answerThree);
}

let arr=[questionOne(),questionTow(),questionThree()]
for (let index = 0; index < arr.length; index++) {
    
    arr[index];
}



 




//let arr=[answerOne,answerTow,answerthree];


//let arr=[questionOne(),questionTow(),questionThree()];


/*for (let index = 0; index < arr.length; index++) {
    if (arr[index]=="yes"||"no") {
        prompt("Indefi");
    }
    console.log(arr[index]);
    
}*/
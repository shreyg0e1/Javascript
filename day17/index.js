// console.log(x);
// console.log(y);
// console.log(z);
// var x=10;
// let y=20;
// const z=30;


// lets see ki function me kese hota hai?
greet();
function greet(){
    console.log("hello greeting");
}

// greet case:
// 1st - memory allocation:
// greet: function code 

// 2nd- code execution:
// jab vo dekhega ki greet ko call kiya hai ( and greet me function code present hai, yani function present hai toh execute hojaiga )


meet();
let meet=function (){
    console.log("hello meeting");
}

// meet case:
// 1st - memory allocation:
// meet: 
// because meet ek let se declared variable hai toh kuch nhi hoga temporal dead me jaiga

// 2nd- code execution:
// jab vo dekhega ki meet ko call kiya hai ( and meet me kuch bhi  present nahi hai, toh error dega )
// ReferenceError: Cannot access 'meet' before initialization


jeet();
var jeet=function (){
    console.log("hello jeet");
}

// jeet case:
// 1st - memory allocation:
// jeet: undefined
// because jeet ek var  se declared variable hai toh undefined ayega

// 2nd- code execution:
// jab vo dekhega ki jeet ko call kiya hai ( and jeet me undefined   present  hai, undefined kese execute hoga , function execute hote hai, isiliye error ayega )
// TypeError: jeet is not a function
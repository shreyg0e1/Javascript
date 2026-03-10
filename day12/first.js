// Functions in JS

// 1st way of making function in js
 function maggie(){
    console.log("bring a maggie");
    console.log("boil it");
    console.log("add maasaala to it");
    console.log("add butter to it");
    console.log("have it with your family");
 }
 maggie();

//  so if now i want to see the recipe of making maggie i just need to call a function maggie()
// maggie()

// parameters
function sum(parameter1 , parameter2){
    console.log(parameter1+parameter2);
}

sum(10, 20)  // sum(argument1, argument2)

// Return: it is used to return the thing at the place from where the function is called
// we can use return to : 1) directly print the value . 2) to stroe it in a new variable

// Example 1: multiply function
function mul(a,b){
    return(a*b);
}

console.log(mul(1,2));


// Example 2: multiply function
function multi(a,b){
    return(a*b);
}

let storage=multi(1,8);
console.log(`this is storage=${storage}`);


// 2nd way of making function in js: storing whole function in variable
let fun=function(){
    console.log("2nd way of making function");
    console.log("isme variable ke name ko call krna hota hai");
    return "yha se value jha call hua hai vha jaigi"

    console.log("return ke niche vali statements kabhi execute nahi hongi, kyu ki function vhi se return hora hai");
}

fun();
console.log(fun); //output: [Function: fun] 
console.log(fun());


// Arrow Function
const add= (number1, number2)=>{
    return(number1+number2);
}

console.log(add(2,10));

// so using => arrow function you can write it in a single statement:
const addition= (number1, number2)=>(number1+number2); 
 //iska mtlv ye hai 

/* const add= (number1, number2)=>{
    return(number1+number2);
}
   yani => k baad jobhi hai vo return hoga and {} ye bracket haat gye hai */

console.log(add(2,10));



// cube function
const func=function cube(cube){
    return cube*cube*cube;
}

console.log(func(3));


// if  i have a single parameter then in arrow function i did not need to put ( ) 
const funct= cube => cube*cube*cube; // rather then writing like this :const funct= (cube)=> cube*cube*cube;


console.log(func(3));



// create a sum functiion in which number of arguments are not known (ptani kitne aajainge):
const summ= function(...number){
    // now to add all these aguments that is in array i can use LOOPS
    console.log(number)
}

summ(2,3,4,5); //using rest operator 
summ(10,20,3,2,1,34,54,32,56,79,80);


// I can also pass Object into a function

let obj={
    name:"shrey",
    age:22,
    weight:69,
    address:"dehradun"
}

let fu=function(ismecallhogaobj){
    console.log(ismecallhogaobj.name, ismecallhogaobj.weight);
}
fu(obj);


// destructure of object in a function
let object={
    name:"shrey",
    age:22,
    weight:69,
    address:"dehradun"
}

let f=function({name,address}){
    console.log(name,address);
}
f(object);


// destructure of array in a function 
let array=[1,2,34,12]

let f1=function([first, , second]){
    console.log(first, second);
}
f1(array);





// // For-of loop
// // If i need to access the elements of an array in easy way
// const arr=[10,20,11,18,13];
// for (const value of arr) {
//     console.log(value);
// }

// // for-of loop on string:
// let str="shrey goel";
// for (const value of str) {
//     console.log(value);
// }


// // Don't use for-of loop on Object: because sysmbol.iterable is not defined or obj is not iterable 
// // const obj={
// //     name:"shrey",
// //     age:22,
// //     color:"white"
// // }

// // for (const value of obj) {
// //     console.log(value); //it will give--> TypeError: obj is not iterable
// // }


// // object stores in accending order :
// const obj1={
//     2:"second",
//     1:"first"
// };

// console.log(obj1);


// // if we need to iterate object forcefully with for-of loop: 
// // convert object into array types values : using Object.keys, Object.values
// const obj2={
//     name:"boeny",
//     Age:22
// }

// // Object.keys: only keys
// for (const value of Object.keys(obj2)) {
//     console.log(value);
// }

// // Object.values: only values 
// for (const value of Object.values(obj2)) {
//     console.log(value);
// }

// // both keys and values
// for (const value of Object.keys(obj2)) {
//     console.log(value,obj2[value]);
// }



// // call-back function: whenever we passed a function referance  as an argument of a function
// function names(parameter){
//     console.log("Hello I am name");
//     parameter();
// }

// function greet(){
//     console.log("I am call-back function");
// };

// names(greet); //greet function ka refference dere hai ek names function k argument me

// // another way
// // names(function greet(){
// //     console.log("I am call-back function");
// // });

// // arrow-function way:
// // names(()=> {
// //     console.log("I am call-back function");
// // });


// // arrow-function : another way of writing
// // names(()=> 
// //     console.log("I am call-back function")
// // );




// // // Demonstrating use of call-back function: by using setInterval()
// // function fetchData(){
// // //bhut sara code hoga vse yha pe
// // console.log("I am fetching data");
// // }
// // setInterval(fetchData,5000); // setInterval: iske andr fetchData fucntion ka refference diya hai



// forEach: (high-order function), require call-back function
// syntax: forEach(call-back function)
let arr1=[10,20,30,40,50];
arr1.forEach(function (num){
    console.log(num);
});

// in single line arrow function
arr1.forEach((num)=>console.log(num)); 
        //is (num) ka bracket hta skta hu because ek hi parameter hai
arr1.forEach(num=>console.log(num));    
//  I can also access elements,index,wholearray
arr1.forEach((num,index,array)=>console.log(num,index,array));  
// where this array vala use? : it is used to modify array like this:
arr1.forEach((num,index,array)=> array[index]=num*2);

console.log(arr1); //to see the modification 




// Filter: used to filter out data, also expects call-back function
// syntax:- filter(call-back function)
let arr2=[10,20,13,40,28,31,17,2,3];
arr2.filter((num)=>{
    num%2==0;
  })
// lets store it in a result
// const result= arr2.filter((num)=>{
//                  return num%2==0;
//                 })
// lets stroe it in single line: because return htaoge and {ye brackets bhi htaoge arrow function se hojaiga}
const result= arr2.filter((num)=> num%2==0)
   
console.log(result)



// Use-Case of filter: 
// here we are filtering those students having numbers greater then 50
const students=[
    {Name:"Rohan", Age:22, Marks:70},
    {Name:"Mohan", Age:24, Marks:80},
    {Name:"Darshan", Age:28, Marks:30},
    {Name:"Mohit", Age:32, Marks:40},
    {Name:"Shadik", Age:12, Marks:90},
]

const toppers=students.filter((obj)=>{
return obj.Marks>50;
})

// // single line:
// const toppers=students.filter((obj)=> obj.Marks>50);
console.log(toppers);

// // DESTRUCTURING obj and accessing directs Marks: another-way of writing it
// const toppers=students.filter(({Marks})=> Marks>50);
// console.log(toppers);



// // Map:  we can modify array here , it also can have 3 arguments(num,index,array)
// // syntax:- map(call-back function)
// const arr3=[1,2,4,5];
// const result1=arr3.map((num)=>num*num);
// console.log(result1);



// Example of using filter and map at same time:
// suppose theres an array you need to find the 1) even numbers from it , 2) and print the square of those even numbers:
const array=[1,2,3,4,5,6];
// const rslt=array.filter((num)=>num%2==0).map((num)=>num*num);
// console.log(rslt);
// 4,16,36=2,8,18

// // we can further use map and filter on that
const rslt=array.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(rslt);
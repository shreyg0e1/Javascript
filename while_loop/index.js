// This is from "CHAI AUR CODE"
// while loop 
let i=0
while(i<=20){
    console.log(`table of 2: ${i}`);
    i+=2;
}


// access array elements
let arr=[10,20,"superman", 30,"ironman"];
let index=0;
while(index<arr.length)
{
    console.log(`elements of array are:${arr[index]}`);
    index++;
}

// DO-while
let score =11;
do{
console.log(`the score is = ${score}`);
score++;
}while(score<=10 );



// for-of loop
// for-of loop- array
const arr1=[1,2,3,4,5];
for (const elements of arr1) {
    console.log(elements);
}

// for-of loop- string
const greetings="Hello Bhai";
for (const greet of greetings) {
    console.log(greet);
}

// Map: key values, remembers the sequence, unique hota hai
const map= new Map;
map.set('In' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('In' , "India")
map.set('In' , "India")

console.log(map);
// console.log(typeof map);


// For-of loop - map  
for (const key of map) {
    console.log(key);  //gives output in [ square bracket] : it will print everything in a map
    // console.log(typeof key); 

}

// destructure : only keys
for (const [key] of map) {
    console.log(key);
    
}


// destructure : key value

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}



// for-in loop
const myobj={
    hn: "hindi",
    en: "english",
    js: "javascript",   
}

for (const key in myobj) {
    console.log(key); //this will print only keys of object

}


// if you want to  access the values also then:
for (const key in myobj) {
 
    console.log(`${key} stands for ${myobj[key]}`);
}

// output:-
// hn stands for hindi
// en stands for english
// js stands for javascript




// for-in loop in arrays
const arr2=["superma","batman","ironman","hulk"]
for (const key in arr2) {
  console.log(key); //it will give keys/index of elements inthe arrays 
}


// if we need to print elements of array using for-in loop:
const arr3=["superma","batman","ironman","hulk","shaktiman"]
for (const key in arr3) {
  console.log(arr3[key]); 
}



// for-in loop on map
// gives nothing 
const map2= new Map;
map2.set('Inn' , "India")
map2.set('USA' , "United States of America")
map2.set('Fr' , "France")
map2.set('In' , "India")
map2.set('In' , "India")

// console.log(map2);
for (const key in map2) {
 console.log(key);
}



// for-each loop : higher order function; call back
const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (value){
    console.log(value);
})



// for-each loop as an Arrow function : higher order function; call back
const coding1=["Arrow vala hai","js","ruby","java","python","cpp"]
coding1.forEach( (item) => {
    console.log(item);
})



// to access items and index and whole array at once:
const coding2=["Arrow vala hai","js","ruby","java","python","cpp"]
coding2.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})




// what if arrays has objects in it and we need to acces objects
const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },

    {
        languageName:"java",
        languageFileName:"java"
    },

    {
        languageName:"python",
        languageFileName:"py"
    }

]

mycoding.forEach((item)=>{
    // console.log(item);
    console.log(item.languageFileName);
})
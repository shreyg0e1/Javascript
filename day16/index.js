// reduce: it can take till 4 arguments(accumulator,current,index,array)
// accumulator: return result will be store in accumulator
// current: current values from array
// it also expects call-back function
// ye result create krta hai (string,aray,object ...kisi bhi form me)
// syntax:- arr.reduce(call-back function, initialization)
// therefore, arr.reduce((accumulator, current)=>{
// 
// }, initialization)

// example:-
const arr=[10,20,30,40,50];
const result= arr.reduce((acc,curr)=>{
    acc= acc+curr;
    return acc;
}, 0) ; // here 0 is initialize for acc

console.log(result);

// I can write it in a single line aswell
// const result= arr.reduce((acc,curr)=>  acc= acc+curr , 0) ; 
// console.log(result);



// Use of : hasOwnPropert : gives true or false, checks if key is present or not
let obj={
    name:"shrey",
    age:22,
    orange:1
}

let curr="orange";
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("salary"));
console.log(obj.hasOwnProperty(curr));
if(obj.hasOwnProperty(curr)){
    obj[curr]++
}

console.log(obj);

// // alternative way to test:-
// console.log("name" in obj);
// console.log("city" in obj);




// Real-world Use-Case of REDUCE:
// count the number of oranges,apple,grapes from an array & result should be in object
// something like this:- { orange: 3, apple: 2, banana: 2, grapes: 1 }

const arr1=["orange", "apple","banana","orange", "apple","banana","orange", "grapes"];
const result1= arr1.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
    acc[curr]=1;
    return acc;

}, {})
console.log(result1);


// another-way by using :- (condition ) ? (do this) : (else do this);
// Rohit negi don't preffer this method because it is not good  readable code
// const result1= arr1.reduce((acc,curr)=> {
//     (acc.hasOwnProperty(curr))? acc[curr]++ : acc[curr]=1 ;
//     return acc ;
// }, {})
// console.log(result1);





// Set: collection of unique values
// stores values without duplicates,which make it different from arrays
// value in set can be of any type : primitive(numbers,string,etc..) or objects
// add,delete,has,size,clear

// 1st way to create a set:
const set1=new Set([10,20,30,40,10,30]);
console.log(set1); //only gives unique value


// 2nd way to create a set:
const set2=new Set();
//add
set2.add(4);  
set2.add(6);
set2.add("shrey");
set2.add(30);
console.log(set2);

// delete
set2.delete(6);
console.log(set2);

// size
console.log(set2.size); // 3 because 6 is deleted

// has : gives true or false, checks the vvlaue is present in set or not present
const user_id=new Set(["rohit_negi9","shreygoyl", "saumya.rastogi"]);
let new_user="rohit_negi9";
console.log(user_id.has(new_user)); //gives true


// clear: it clears every thing from set making size=0 and empty set
user_id.clear();
console.log(user_id);



// Convert array into set (to get unique elements)
let arr2=[10,30,20,10,40,50,30];
const set3=new Set(arr2);
console.log(set3);  //output:- Set(5) { 10, 30, 20, 40, 50 }

// convert set into array , using spread operator ...
arr2=[...set3]; 
console.log(arr2); // array with unique elements [ 10, 30, 20, 40, 50 ]



// How to make Union-set:
let set4= new Set([10,20,30,40,50]);
let set5= new Set([10,20,70,80]);

let union_set=new Set([...set4,...set5]);
console.log(union_set);



// How to make an Intersection-set: filter use hoga but vo sirf array k sath hota hai so phele array bnana pdega then pure ko set bananapdega
let set6= new Set([10,20,30,40,50]);
let set7= new Set([10,20,70,40]);
let intersection_set= new Set([...set6].filter((num)=>set7.has(num)));
console.log(intersection_set);




// How to Iterate over set : 1) for-of loop ,  2) forEach 
// 1) for-of loop
let set8=new Set([10,20,30,40,50]);
for (const value of set8) {
    console.log(value);
}

//  2) forEach 
set8.forEach((value)=>console.log(value));




// Map: collection of key-value pairs
// keys and values can be of any data type not like object
// map remembers the order/sequence not like object
// set(key,value), delete(key), has(key), size, get(key), clear() 

// How to create Map: 1st way
const map1= new Map();
map1.set(3,90);
map1.set("rohit",45);
map1.set(20,"mohan");
map1.set("rohit",40); //value update krega upper vale ki
map1.set("rohit",40); //will  not get print
console.log(map1);

// delete(key)
map1.delete(3);
console.log(map1);

// has(key)
console.log(map1.has("rohit"));

// size: it is not a method thats why not using ()
console.log(map1.size);

// get(key)
console.log(map1.get(20));

// clear()
map1.clear();
console.log(map1);



// How to create a map : 2nd way
// like in set :- new Set([])---> 1d Array
// therefore:- new Map([[]])---> 2d Array

const map2= new Map([
    [4,"rohit"],
    ["mohan", "rohan"],
    [30,9]
]);

console.log(map2);


// How to Iterate over a Map: 1) for-of loop ,  2) forEach
// 1) for-of loop
const map3= new Map([ [4,"rohit"], ["mohan", "rohan"], [30,9], [63,78]]);
for (const value of map3) {
    console.log(value); //gives output in array format 
}

// Destructure to directly access key and values from [array]
// because , this whole value [4,"rohit"] comes stores in value, so we can directly destructure it
for (const [key,value] of map3) {
    console.log(key,value);  
}


// 2) forEach


